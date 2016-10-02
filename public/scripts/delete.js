'use strict';

$(() => {

$('.delete_item').on('submit',  function(event) {
  event.preventDefault();
  $.ajax({
    url:`/delete/:id`,
    method: 'DELETE'
    }
  })
})



});
