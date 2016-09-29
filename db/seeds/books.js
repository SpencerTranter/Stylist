exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(function () {
      return Promise.all([

        knex('books').insert({
          user_id: 1,
          list_id: 1,
          name: 'Harry Potter'
        }),
        knex('books').insert({
          user_id: 2,
          list_id: 1,
          name: 'Lord Of The Rings'
        })

      ]);
    });
};
