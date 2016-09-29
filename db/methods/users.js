'use strict';
module.exports = (knex) => ({

getUser: function(user_id, cb) {
  knex.select('*')
  .from('users')
  .where('id', '=', user_id).asCallback(cb);
},

insertUser: function(user, cb) {
  knex('users').insert(user).asCallback(cb);
}

})
