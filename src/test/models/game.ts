export class Game {
  id: string;
  title: string;
  price: string;
  sku: string;
  releaseDate: string;
  
  constructor({ id = '', title = '', price = '', sku = '', releaseDate = ''} = {}) {
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