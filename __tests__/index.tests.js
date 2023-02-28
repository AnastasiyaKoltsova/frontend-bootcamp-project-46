import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const fileExt = ['.json', '.yml'];

const resultStylish = fs.readFileSync(
  path.resolve(process.cwd(), '__fixtures__/result_stylish.txt'),
  'utf-8',
);
const resultPlain = fs.readFileSync(
  path.resolve(process.cwd(), '__fixtures__/result_plain.txt'),
  'utf-8',
);

// eslint-disable-next-line no-undef
test.each(fileExt)('testing different file options', (extension) => {
  const fileBefore = `__fixtures__/file1${extension}`;
  const fileAfter = `__fixtures__/file2${extension}`;
  const actual1 = genDiff(fileBefore, fileAfter, 'stylish');
  // eslint-disable-next-line no-undef
  expect(actual1).toEqual(resultStylish);
  const actual2 = genDiff(fileBefore, fileAfter, 'plain');
  // eslint-disable-next-line no-undef
  expect(actual2).toEqual(resultPlain);
  const actual4 = genDiff(fileBefore, fileAfter);
  // eslint-disable-next-line no-undef
  expect(actual4).toEqual(resultStylish);
});
