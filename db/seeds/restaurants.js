exports.seed = function(knex, Promise) {
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([

        knex('restaurants').insert({
          user_id: 1,
          list_id: 1,
          name: 'Yaletown Brew Pub'
        }),
        knex('restaurants').insert({
          user_id: 2,
          list_id: 1,
          name: 'Mc.Donalds'
        })

      ]);
    });
};
