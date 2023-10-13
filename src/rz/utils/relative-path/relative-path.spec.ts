import { determineRelativePath } from './relative-path';

describe('relativePath', () => {
  describe('determineRelativePath', () => {
    it('should determine the relative path of a file vs root', () => {
      const filePath = 'libs/book/tsconfig.json';
      const result = determineRelativePath(filePath);
      const expected = '../..';
      expect(result).toEqual(expected);
    });

    it('should return null if no relative path i.e. it is root', () => {
      const filePath = 'tsconfig.json';
      const result = determineRelativePath(filePath);
      const expected = null;
      expect(result).toEqual(expected);
    });
  })
})