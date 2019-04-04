const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          "kennel_id": 1,
          "bio": faker.lorem.paragraph(),
          "Age": faker.random.number({'min':1, 'max':20}),
          "Size": 'small',
          "male": faker.random.boolean(),
          "Price": faker.random.number({'min':0,'max':200}),
          "img_url": faker.image.animals(),
        },
        {
          "kennel_id": 2,
          "bio": faker.lorem.paragraph(),
          "Age": faker.random.number({'min':1, 'max':20}),
          "Size": 'medium',
          "male": faker.random.boolean(),
          "Price": faker.random.number({'min':0,'max':200}),
          "img_url": faker.image.animals(),
        },
        {
          "kennel_id": 3,
          "bio": faker.lorem.paragraph(),
          "Age": faker.random.number({'min':1, 'max':20}),
          "Size": 'large',
          "male": faker.random.boolean(),
          "Price": faker.random.number({'min':0,'max':200}),
          "img_url": faker.image.animals(),
        }
      ]);
    });
};
