import { Attributes, TagName } from './types';

export default class Tag {
  constructor(
    private tag: TagName,
    private attributes: Attributes = {},
    private content: string = '',
  ) {}

  private singleTags = ['input', 'br', 'hr', 'img'];

  private static buildAttr(name: string, value: string | number | boolean) {
    switch (typeof value) {
      case 'number':
        return `${name}="${value.toString()}"`;
      case 'boolean':
        return name;
      default:
        return `${name}="${value}"`;
    }
  }

  toString() {
    const start = Object.entries(this.attributes)
      .reduce((acc, [attr, value]) => [...acc, Tag.buildAttr(attr, value)], [`<${this.tag}`])
      .join(' ');
    const end = this.singleTags.includes(this.tag) ? '>' : `>${this.content}</${this.tag}>`;
    return `${start}${end}`;
  }
}
