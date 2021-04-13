import { replaceNavLinks, buildUrlPrefixPattern } from './nav.utils';

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

const regexpCases = [
  {
    domain: 'foo.bar',
    path: '',
    cases: {
      'http://foo.bar': true,
      'https://foo.bar/': true,
      'http://fooxbar/': false,
    },
  },
  {
    domain: 'foo.bar',
    path: '/',
    cases: {
      'http://foo.bar': true,
      'https://foo.bar/': true,
      'http://fooxbar/': false,
    },
  },
  {
    domain: 'foo.bar',
    path: '/basePath',
    cases: {
      'http://foo.bar': false,
      'https://foo.bar/': false,
      'http://fooxbar/': false,
      'http://foo.bar/basePath': true,
      'http://foo.bar/basePath/foo/bar': true,
    },
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

  describe('buildUrlPrefixPattern', () => {
    it('should build correct regexp', () => {
      for (const { domain, path, cases } of regexpCases) {
        const regexp = buildUrlPrefixPattern(domain, path);
        for (const url in cases) {
          if (cases.hasOwnProperty(url)) {
            expect(regexp.test(url)).toBe(cases[url]);
          }
        }
      }
    });
  });
});
