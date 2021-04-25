import { isFeatureEnabled } from './index.page';

describe('pages/api/feature-toggle/index.page', () => {
  describe('isFeatureEnabled', () => {
    let mockRules;

    it('should enabled if the rule is not existed', () => {
      mockRules = {};
      expect(
        isFeatureEnabled(mockRules)({
          name: 'notExisted',
        })
      ).toBe(true);
    });

    it('should disabled if isEabled is false', () => {
      mockRules = {
        feature: {
          isEnabled: false,
        },
      };
      expect(
        isFeatureEnabled(mockRules)({
          name: 'feature',
        })
      ).toBe(false);
    });

    it("should disabled if it's in the diabledHosts", () => {
      mockRules = {
        feature: {
          disabledHosts: ['host1', 'host2'],
          isEnabled: true,
        },
      };

      const isEnabled = isFeatureEnabled(mockRules);

      expect(
        isEnabled({
          name: 'feature',
          host: 'host1',
        })
      ).toBe(false);
      expect(
        isEnabled({
          name: 'feature',
          host: 'host2',
        })
      ).toBe(false);
    });

    it("should enabled if it's enabled and not in the diabledHosts", () => {
      mockRules = {
        feature: {
          disabledHosts: ['host1', 'host2'],
          isEnabled: true,
        },
      };

      expect(
        isFeatureEnabled(mockRules)({
          name: 'feature',
          host: 'host3',
        })
      ).toBe(true);
    });
  });
});
