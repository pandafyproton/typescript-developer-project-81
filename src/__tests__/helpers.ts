import path from 'node:path';
import fs from 'node:fs';

const getFixturePath = (filename: string) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename: string) => fs.promises.readFile(getFixturePath(filename), 'utf-8');

export { getFixturePath, readFixture };
