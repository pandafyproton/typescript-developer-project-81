import { expect, test, describe } from 'vitest';
import HexletCode from '../HexletCode';
import { readFixture } from './helpers';

describe('Forms', () => {
  test('Form: 01', async () => {
    const form = HexletCode.formFor({}, { url: '/users' }, (f) => {
      f.submit('Send');
    });
    const fixture = await readFixture('form-01.html');
    expect(form).toBe(fixture.trim());
  });

  test('Form: 02', async () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job', { as: 'textarea', cols: 20, rows: 40 });
      f.input('gender');
    });
    const fixture = await readFixture('form-02.html');
    expect(form).toBe(fixture.trim());
  });

  test('Form: 03', () => {
    expect(() => {
      HexletCode.formFor({}, {}, (f) => {
        f.input('none');
      });
    }).toThrowError(/does not exist in the template/);
  });
});
