exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([

        knex('users').insert({
          id: 1,
          email: 'stylist@stylist.com',
          password:'stylist',
          first_name: 'Alice',
          last_name: 'Cup'
        }),
        knex('users').insert({
          id: 2,
          email: 'lighthouse@lighthouse.com',
          password:'lighthouse',
          first_name: 'Bob',
          last_name: 'Mug'
        }),

      ]);
    });
};
