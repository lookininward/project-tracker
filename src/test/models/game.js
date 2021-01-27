export class Game {
  constructor({ id, title, price, sku, releaseDate}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.sku = sku;
    this.releaseDate = releaseDate;
  }

  get fields() {
    return [
      'id',
      'title',
      'price',
      'sku',
      'releaseDate',
    ]
  }
}