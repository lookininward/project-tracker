export class Animal {
  constructor({ id, species, country}) {
    this.id = id;
    this.species = species;
    this.country = country;
  }

  get fields() {
    return [
      'id',
      'species',
      'country'
    ]
  }
}