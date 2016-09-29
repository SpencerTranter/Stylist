exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('purchases', function (table) {
      table.increments();
      table.integer('list_id').references('lists.id');
      table.integer('user_id').references('users.id');
      table.string('name');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('purchases')
  ])
};
