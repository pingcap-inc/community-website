import { replaceNavLinks, buildUrlPrefixPattern } from './utils';

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

const replaceCases = [
  {
    name: 'should remove prefix string from URL',
    items: mockNavItems,
    rules: [{ urlPrefixRegexp: /^https?:\/\/host\.com1\// }],
    checks: [
      {
        path: [0],
        want: 'l1',
      },
      {
        path: [1],
        want: 'l2',
      },
      {
        path: [2],
        want: 'https://host.com2/l3',
      },
      {
        path: [3, 0],
        want: 'l4',
      },
    ],
  },
  {
    name: 'should remove prefix string from all URLs',
    items: mockNavItems,
    rules: [{ urlPrefixRegexp: /^https?:\/\/host\.com1\// }, { urlPrefixRegexp: /^https?:\/\/host\.com2\// }],
    checks: [
      {
        path: [0],
        want: 'l1',
      },
      {
        path: [1],
        want: 'l2',
      },
      {
        path: [2],
        want: 'l3',
      },
      {
        path: [3, 0],
        want: 'l4',
      },
    ],
  },
  {
    name: 'should replace prefix string from all URLs to replacement',
    items: mockNavItems,
    rules: [
      {
        urlPrefixRegexp: /^https?:\/\/host\.com1\//,
        replacement: 'https://test1.host.com/',
      },
      {
        urlPrefixRegexp: /^https?:\/\/host\.com2\//,
        replacement: 'https://test2.host.com/',
      },
    ],
    checks: [
      {
        path: [0],
        want: 'l1',
      },
      {
        path: [1],
        want: 'https://test1.host.com/l2',
      },
      {
        path: [2],
        want: 'https://test2.host.com/l3',
      },
      {
        path: [3, 0],
        want: 'https://test1.host.com/l4',
      },
    ],
  },
  {
    name: 'should return original URL if prefix is not given',
    items: mockNavItems,
    rules: [{ urlPrefixRegexp: null }],
    checks: ['deepEqual'],
  },
  {
    name: 'should return original URL if rules is not given',
    items: mockNavItems,
    rules: [],
    checks: ['deepEqual'],
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

describe('nav/utils', () => {
  describe('fixNavLinks', () => {
    replaceCases.forEach(({ name, items, rules, checks }) => {
      it(name, () => {
        const result = replaceNavLinks({ items, rules });
        for (const check of checks) {
          if (check === 'deepEqual') {
            expect(result).toStrictEqual(items);
          } else {
            const { path, want } = check;
            const item = path.reduce((items, index) => items.items[index], { items: result });
            expect(item.link).toBe(want);
          }
        }
      });
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
