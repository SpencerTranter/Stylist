'use strict';

$(() => {
$('.delete_item').on('submit',  function(event) {
  var form = this;
  event.preventDefault();
  $.ajax({
    url: form.action,
    method: 'DELETE',
    success: () => {
      $(this).closest("li").remove();
    }
    })
})



});
