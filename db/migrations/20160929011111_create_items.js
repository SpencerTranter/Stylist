exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('items', function (table) {
      table.increments();
      table.integer('list_id').references('lists.id');
      table.string('type');
      table.string('name');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('items')
  ])
};
