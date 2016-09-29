exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function () {
      return Promise.all([

        knex('items').insert({
          list_id: 1,
          type: 'movie',
          name: 'Harry Potter'
        }),
        knex('items').insert({
          list_id: 2,
          type: 'book',
          name: 'Moby Dick'
        }),
        knex('items').insert({
          list_id: 3,
          type: 'restaurant',
          name: 'Subway'
        }),
        knex('items').insert({
          list_id: 4,
          type: 'purchase',
          name: 'Bunkbeds'
        }),
        knex('items').insert({
          list_id: 5,
          type: 'movie',
          name: 'Lord Of The Rings'
        }),
        knex('items').insert({
          list_id: 6,
          type: 'book',
          name: 'The Scarlett Letter'
        }),
        knex('items').insert({
          list_id: 7,
          type: 'restaurant',
          name: 'Mc.Donalds'
        }),
        knex('items').insert({
          list_id: 8,
          type: 'purchase',
          name: 'Sun Glasses'
        })

      ]);
    });
};
