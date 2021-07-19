import { getTidbReleaseOptions } from '.';

describe('pages/contact-us/utils', () => {
  describe('getTidbReleaseOptions', () => {
    it('should handle undefined releases', () => {
      expect(getTidbReleaseOptions()).toEqual([]);
    });

    it('should tramsform releases data into dropdown options', () => {
      expect(
        getTidbReleaseOptions([
          {
            major_number: 5,
            prefix: 'v5',
            children: ['v5.1.0', 'v5.0.3'],
          },
          {
            major_number: 4,
            prefix: 'v4',
            children: ['v4.1.0', 'v4.0.1', 'v4.0.0'],
          },
        ])
      ).toEqual([
        {
          label: 'v5',
          options: [
            {
              value: 'v5.1.0',
              label: 'v5.1.0',
            },
            {
              value: 'v5.0.3',
              label: 'v5.0.3',
            },
          ],
        },
        {
          label: 'v4',
          options: [
            {
              value: 'v4.1.0',
              label: 'v4.1.0',
            },
            {
              value: 'v4.0.1',
              label: 'v4.0.1',
            },
            {
              value: 'v4.0.0',
              label: 'v4.0.0',
            },
          ],
        },
      ]);
    });
  });
});
