exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return Promise.all([

        knex('movies').insert({
          user_id: 1,
          list_id: 1,
          name: 'Avatar'
        }),
        knex('movies').insert({
          user_id: 2,
          list_id: 1,
          name: 'The Shining'
        })

      ]);
    });
};
