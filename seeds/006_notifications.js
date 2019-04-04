const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notifications').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {
          "admin_id": faker.random.number({'min':1, 'max':5}),
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()
        },
        {
          "admin_id": faker.random.number({'min':1, 'max':5}),
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()
        },
        {
          "admin_id": faker.random.number({'min':1, 'max':5}),
          "email": faker.internet.email(),
          "message": faker.lorem.sentences(),
          "date_sent": faker.date.recent()
        }
      ]);
    });
};

