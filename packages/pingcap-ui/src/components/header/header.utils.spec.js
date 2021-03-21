import { getCurrentNav } from './header.utils';

describe('components/header/header.utils', () => {
  describe('getCurrentNav', () => {
    it('should return matched title if provided link is located', () => {
      expect(getCurrentNav()).toBeTruthy();
    });
  });
});
