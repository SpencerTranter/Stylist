'use strict';
module.exports = (knex) => ({

getUsers: function(cb){
  knex('users')
  .select('*')
  .asCallback(cb);
},

getUser: function(user_id, cb) {
  knex('users')
  .select('*')
  .where('id', '=', user_id)
  .asCallback(cb);
},

getUserByEmail: function(username, cb) {
  knex('users')
  .select('*')
  .where('email', '=', username)
  .asCallback(cb);
},

insertUser: function(user, cb) {
  knex('users')
  .insert(user)
  .asCallback(cb);
},

deleteUser: function(user_id, cb) {
  knex('users')
  .where('id', '=', user_id)
  .del()
  .asCallback(cb);
}

})
