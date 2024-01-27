import Tag from './Tag';

type Template = Record<string, string | number>;

type FormRawAttributes = {
  url?: string;
  method?: 'post' | 'get';
};

export default class HexletCode {
  private tags: Tag[];

  constructor(
    private readonly template: Template,
    private readonly options: Record<string, string | number | boolean>,
  ) {
    this.tags = [];
  }

  public static formFor(
    template: Template,
    rawAttributes: FormRawAttributes,
    callback: (f: HexletCode) => void,
  ) {
    const attributes = {
      action: rawAttributes.url ?? '#',
      method: rawAttributes.method ?? 'post',
    };
    const form = new HexletCode(template, attributes);
    callback(form);
    return form.toString();
  }

  input(name: string, options: Record<string, string | number | boolean> = {}) {
    if (!(name in this.template)) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }
    const { as, ...restOptions } = options;
    const tagName = as && options.as === 'textarea' ? 'textarea' : 'input';
    this.tags.push(new Tag('label', { for: name }, name.charAt(0).toUpperCase() + name.slice(1)));
    if (tagName === 'textarea') {
      const tag = new Tag(
        tagName,
        {
          ...restOptions,
          name,
        },
        String(this.template[name]),
      );
      this.tags.push(tag);
    } else {
      const tag = new Tag(tagName, {
        ...options,
        name,
        type: 'text',
        value: this.template[name],
      });
      this.tags.push(tag);
    }
  }

  submit(value = 'Save') {
    this.tags.push(new Tag('input', { type: 'submit', value }));
  }

  toString() {
    return new Tag(
      'form',
      this.options,
      this.tags.map((tag) => tag.toString()).join(''),
    ).toString();
  }
}
