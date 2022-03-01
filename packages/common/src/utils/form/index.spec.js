import * as mock from './index.mock';
import { getCascaderDefaultValue } from './index';

describe('common/utils/form', () => {
  describe('getCascaderDefaultValue', () => {
    it('should get the default value list', () => {
      expect(getCascaderDefaultValue('xihu', mock.cascaderOptions)).toStrictEqual(['zhejiang', 'hangzhou', 'xihu']);
      expect(getCascaderDefaultValue('zhonghuamen', mock.cascaderOptions)).toStrictEqual([
        'jiangsu',
        'nanjing',
        'zhonghuamen',
      ]);
    });
  });
});
