exports.seed = function(knex, Promise) {
  return knex('lists').del()
    .then(function () {
      return Promise.all([

        knex('lists').insert({
          user_id: 1,
          type: 'movies'
        }),
        knex('lists').insert({
          user_id: 1,
          type: 'books'
        }),
        knex('lists').insert({
          user_id: 1,
          type: 'restaurants'
        }),
        knex('lists').insert({
          user_id: 1,
          type: 'purchases'
        }),

        knex('lists').insert({
          user_id: 2,
          type: 'movies'
        }),
        knex('lists').insert({
          user_id: 2,
          type: 'books'
        }),
        knex('lists').insert({
          user_id: 2,
          type: 'restaurants'
        }),
        knex('lists').insert({
          user_id: 2,
          type: 'purchases'
        }),

      ]);
    });
};
