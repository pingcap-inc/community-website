import { replaceNavLinks } from './nav.utils';

const mockNavItems = [
  {
    link: 'l1',
  },
  {
    link: 'https://host.com1/l2',
  },
  {
    link: 'https://host.com2/l3',
  },
  {
    items: [
      {
        link: 'http://host.com1/l4',
      },
    ],
  },
];

describe('utils/nav.utils', () => {
  describe('fixNavLinks', () => {
    it('should replaces url prefix properly', () => {
      const result = replaceNavLinks(mockNavItems, /^https?:\/\/host\.com1\//);
      expect(result[0].link).toBe('l1');
      expect(result[1].link).toBe('l2');
      expect(result[2].link).toBe('https://host.com2/l3');
      expect(result[3].items[0].link).toBe('l4');
    });
  });
});
