'use strict';
module.exports = (knex) => ({


// getItems: function(cb){
//   knex('items')
//   .select('*')
//   .asCallback(cb);
// },

// getListItems: function(list_id, cb){
//   knex('items')
//   .select('*')
//   .where('list_id', '=', list_id)
//   .asCallback(cb);
// },

// getItem: function(item_id, cb) {
//   knex('items')
//   .select('*')
//   .where('id', '=', item_id)
//   .asCallback(cb);
// },

// insertItem: function(item, cb) {
//   knex('items')
//   .insert(item)
//   .asCallback(cb);
// },

// deleteItem: function(item_id, cb) {
//   knex('items')
//   .where('id', '=', item_id)
//   .del()
//   .asCallback(cb);
// },

getAll: function(user_id, cb) {
  knex.select('*')
    .from('lists')
    .leftJoin('items', 'lists.id', 'items.id')
    .where('lists.user_id', '=', user_id).asCallback(cb);
}

})
