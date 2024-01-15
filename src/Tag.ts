type TagName = 'form' | 'input' | 'label' | 'textarea' | 'br' | 'img' | 'div';

export default class Tag {
  constructor(
    private tag: TagName,
    private attributes: { [key: string]: string } = {},
    private content: string = '',
  ) {}

  private singleTags = ['input', 'br', 'hr', 'img'];

  toString() {
    const start = Object.entries(this.attributes)
      .reduce((acc, [attr, value]) => [...acc, `${attr}="${value}"`], [`<${this.tag}`])
      .join(' ');
    const end = this.singleTags.includes(this.tag) ? '>' : `>${this.content}</${this.tag}>`;
    return `${start}${end}`;
  }
}
