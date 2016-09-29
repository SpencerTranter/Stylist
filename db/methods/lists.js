'use strict';
module.exports = (knex) => ({

getLists: function(cb){
  knex('lists')
  .select('*')
  .where('user_id', '=', user_id)
  .asCallback(cb);
},

getUserLists: function(user_id, cb){
  knex('lists')
  .select('*')
  .where('user_id', '=', user_id)
  .asCallback(cb);
},

getList: function(list_id, cb) {
  knex('lists')
  .select('*')
  .where('id', '=', list_id)
  .asCallback(cb);
},

insertList: function(list, cb) {
  knex('lists')
  .insert(list)
  .asCallback(cb);
},

deleteList: function(list_id, cb) {
  knex('lists')
  .where('id', '=', list_id)
  .del()
  .asCallback(cb);
}

})
