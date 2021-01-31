import faker from 'faker';

// faker.seed(416);

const data = {
   "tickets": (() => {
      const result = [];
      for (let i = 0; i < 200; i++) {
         result.push({
            "id": `${faker.random.uuid()}${faker.random.number()}`,
            "category": faker.helpers.randomize([
               'feature',
               'bug',
               'chore',
               // 'unknown',
            ]),
            "title": faker.lorem.sentences(),
            "color": faker.internet.color(),
            "owners": ['test'],
            "stage": faker.helpers.randomize([
               'Unscheduled',
               'In Progress',
               'Ready for Development',
               'Ready for Review',
               'Complete'
            ])
         })
      }
      return result;
   })(),
   "users": (() => {
      const result = [];
      for (let i = 0; i < 2; i++) {
         result.push({
            "id": `${faker.random.uuid()}${faker.random.number()}`,
            "name": faker.name.findName(),
            "email": faker.internet.email(),
            "role": faker.name.jobTitle(),
         })
      }
      return result;
   })(),
   "animals": (() => {
      const result = [];
      for (let i = 0; i < 3; i++) {
         result.push({
            "id": `${faker.random.uuid()}${faker.random.number()}`,
            "species": faker.lorem.word(),
            "country": faker.address.country(),
         })
      }
      return result;
   })(),
   "games": (() => {
      const result = [];
      for (let i = 0; i < 4; i++) {
         result.push({
            "id": `${faker.random.uuid()}${faker.random.number()}`,
            "title": faker.lorem.words(),
            "price": faker.commerce.price(),
            "sku": `${faker.random.alphaNumeric()}${faker.random.hexaDecimal()}`,
            "releaseDate": faker.date.past().toString(),
         })
      }
      return result;
   })(),
}

export default data;