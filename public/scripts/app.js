'use strict';

$(() => {

  $('.email').focus();
  $('#email').focus();

  $('.dropdown-menu').dropdown();

  //Passes logout call from button click to login.js
  $('#logout_form').on('submit', function (event){
    $.ajax({
        url:`/logout`,
        method: 'POST'
    })
  })

  $('#user_choice').on('submit', function (event) {
    event.preventDefault();
    var formData = {};
    var checked = $('.cbox:checked');

    checked.each((index, element) => {
      formData[element.dataset.category] = $(element).text();
    });

    console.log("I'm going to send this to you: ", formData);
    $.ajax({
      url:'/insertItem',
      method:'POST',
      data: formData,
      success: checked.each(function append_to_list(index, element) {
        var  type = element.dataset.category
        var name = $(element).text();
        if (type === 'Movie') {
          $("<li>" + name + "</li>")
          .appendTo(".list-unstyled.movies.ui-sortable-handle.ui-sortable");
        } else if (type === 'Book') {
          $("<li>" + name + "</li>")
          .appendTo(".list-unstyled.books.ui-sortable-handle.ui-sortable");
        } else if (type === 'Purchase') {
          $("<li>" + name + "</li>")
          .appendTo(".list-unstyled.products.ui-sortable-handle.ui-sortable");
        } else if (type === 'Restaurant') {
          $("<li>" + name + "</li>")
          .appendTo(".list-unstyled.restaurants.ui-sortable-handle.ui-sortable");
        }
      }),
      error: function (err) {
        if (err) throw err;
      }
    })
  })
});



