import { getCurrentNav } from './header.utils';

const mockNavItems = [
  {
    title: 't1',
    link: 'l1',
  },
  {
    title: 't2',
    items: [
      { title: 't3', link: 'l2' },
      { title: 't4', link: 'l3' },
    ],
  },
  {
    title: 't5',
    items: [
      {
        title: 't6',
        items: [
          {
            title: 't7',
            link: 'l4',
          },
        ],
      },
    ],
  },
  {
    title: 't8',
    link: 'https://foo.bar/l5',
  },
];

describe('components/header/header.utils', () => {
  describe('getCurrentNav', () => {
    it('should return matched title if provided link is located', () => {
      expect(getCurrentNav(mockNavItems, 'l1')).toBe('t1');
      expect(getCurrentNav(mockNavItems, 'l2')).toBe('t3');
      expect(getCurrentNav(mockNavItems, 'l3')).toBe('t4');
      expect(getCurrentNav(mockNavItems, 'l4')).toBe('t7');
      expect(getCurrentNav(mockNavItems, 'l5')).toBe(undefined);
      expect(getCurrentNav(mockNavItems, 'l5', /https:\/\/foo\.bar\//)).toBe('t8');
      expect(getCurrentNav(mockNavItems, 'notExisted')).toBeUndefined();
    });
  });
});
