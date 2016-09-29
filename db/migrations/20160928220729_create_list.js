
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('lists', function (table) {
      table.increments();
      table.integer('user_id').references('users.id');
      table.string('type');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('lists')
  ])
};
