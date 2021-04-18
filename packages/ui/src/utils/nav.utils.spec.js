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
      'https://foo.bar/basePath': true,
      'http://foo.bar/basePath/foo/bar': true,
    },
  },
];

describe('utils/nav.utils', () => {
  describe('fixNavLinks', () => {
    it('should remove prefix string from URL', () => {
      const result = replaceNavLinks({ items: mockNavItems, urlPrefixRegexp: /^https?:\/\/host\.com1\// });
      expect(result[0].link).toBe('l1');
      expect(result[1].link).toBe('l2');
      expect(result[2].link).toBe('https://host.com2/l3');
      expect(result[3].items[0].link).toBe('l4');
    });

    it('should return original URL if prefix is not given', () => {
      expect(replaceNavLinks({ items: mockNavItems })).toEqual(mockNavItems);
      expect(replaceNavLinks({ items: mockNavItems, urlPrefixRegexp: null })).toEqual(mockNavItems);
    });
  });

  describe('buildUrlPrefixPattern', () => {
    it('should return null if domain is not given', () => {
      expect(buildUrlPrefixPattern({ path: 'test' })).toBeNull();
      expect(buildUrlPrefixPattern()).toBeNull();
    });

    regexpCases.forEach(({ domain, path, cases }) => {
      const regexp = buildUrlPrefixPattern({ domain, path });
      Object.entries(cases).forEach(([url, expected]) => {
        it.each`
          domain    | path    | url    | expected
          ${domain} | ${path} | ${url} | ${expected}
        `(
          "should expect $expected when domain is '$domain', path is '$path' and url is '$url'",
          ({ domain, path, url, expected }) => {
            expect(regexp.test(url)).toBe(cases[url]);
          }
        );
      });
    });
  });
});
