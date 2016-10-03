'use strict';

$(() => {

  //Dynamically removes list items
  $('ul').on('submit', '.delete_item',  function(event) {
    var form = this;
    event.preventDefault();
    $.ajax({
      url: form.action,
      method: 'DELETE',
      success: () => {
        $(this).closest("li").remove();
      }
    });
  });



});
