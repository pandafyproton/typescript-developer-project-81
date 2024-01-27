import { expect, test, describe } from 'vitest';
import Tag from '../Tag';
import { readFixture } from './helpers';

describe('Tags', () => {
  test('Tag: br', async () => {
    const tag = new Tag('br');
    const fixture = await readFixture('tag-br.html');
    expect(tag.toString()).toBe(fixture.trim());
  });
  test('Tag: button', async () => {
    const tag = new Tag(
      'button',
      {
        id: 'send',
        class: 'btn btn-primary',
        type: 'submit',
      },
      'Send',
    );
    const fixture = await readFixture('tag-button.html');
    expect(tag.toString()).toBe(fixture.trim());
  });
  test('Tag: form', async () => {
    const tag = new Tag('form', {
      action: '/product/1',
      method: 'post',
    });
    const fixture = await readFixture('tag-form.html');
    expect(tag.toString()).toBe(fixture.trim());
  });
  test('Tag: input', async () => {
    const tag = new Tag('input', {
      id: 'username',
      class: 'form-control',
      type: 'text',
      name: 'username',
      placeholder: 'Input your password',
      value: 'Username',
      required: true,
    });
    const fixture = await readFixture('tag-input.html');
    expect(tag.toString()).toBe(fixture.trim());
  });
  test('Tag: label', async () => {
    const tag = new Tag(
      'label',
      {
        for: 'username',
        class: 'form-label',
      },
      'Username',
    );
    const fixture = await readFixture('tag-label.html');
    expect(tag.toString()).toBe(fixture.trim());
  });
});
