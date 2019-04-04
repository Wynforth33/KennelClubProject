exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breeds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('breeds').insert([
        {"name": "Corgi"},
        {"name": "Pit Bull"},
        {"name": "Terrier"},
        {"name": "chicorgua"},
        {"name": "Bull Terrier"},
        {"name": "Pomerainian"}
      ]);
    });
};

