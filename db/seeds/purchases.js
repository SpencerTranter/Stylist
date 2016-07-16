exports.seed = function(knex, Promise) {
  return knex('purchases').del()
    .then(function () {
      return Promise.all([

        knex('purchases').insert({
          user_id: 1,
          list_id: 1,
          name: 'Bunk Beds'
        }),
        knex('purchases').insert({
          user_id: 2,
          list_id: 1,
          name: 'Xbox 360'
        })

      ]);
    });
};
