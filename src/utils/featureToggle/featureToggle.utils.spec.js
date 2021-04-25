import getRules from './featureToggle.config';
import { isFeatureEnabled } from './featureToggle.utils';

jest.mock('./featureToggle.config', () => jest.fn());

describe('pages/api/feature-toggle/index.page', () => {
  describe('isFeatureEnabled', () => {
    beforeEach(() => {
      jest.resetModules();
    });

    it('should enabled if the rule is not existed', () => {
      getRules.mockReturnValue({});
      expect(
        isFeatureEnabled({
          name: 'notExisted',
        })
      ).toBe(true);
    });

    it('should disabled if isEabled is false', () => {
      getRules.mockReturnValue({
        feature: {
          isEnabled: false,
        },
      });
      expect(
        isFeatureEnabled({
          name: 'feature',
        })
      ).toBe(false);
    });

    it("should disabled if it's in the diabledHosts", () => {
      getRules.mockReturnValue({
        feature: {
          disabledHosts: ['host1', 'host2'],
          isEnabled: true,
        },
      });

      expect(
        isFeatureEnabled({
          name: 'feature',
          host: 'host1',
        })
      ).toBe(false);
      expect(
        isFeatureEnabled({
          name: 'feature',
          host: 'host2',
        })
      ).toBe(false);
    });

    it("should enabled if it's enabled and not in the diabledHosts", () => {
      getRules.mockReturnValue({
        feature: {
          disabledHosts: ['host1', 'host2'],
          isEnabled: true,
        },
      });

      expect(
        isFeatureEnabled({
          name: 'feature',
          host: 'host3',
        })
      ).toBe(true);
    });
  });
});
