'use strict';
module.exports = (knex) => ({

  getMovies: function(user_id, cb) {
    knex.select('*')
      .from('lists')
      .leftJoin('items', 'lists.id', 'items.id')
      .where('lists.user_id', '=', user_id)
      .andWhere('items.type', '=', 'movie').asCallback(cb);
  }

})
