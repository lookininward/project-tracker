export class Animal {
  constructor({ id, name}) {
    this.id = id;
    this.name = name;
  }

  get fields() {
    return [
      'id',
      'name',
    ]
  }
}