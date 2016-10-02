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
  });

  $('#user_choice').on('submit', function (event) {
    event.preventDefault();
    var formData = {};
    var checked = $('.cbox:checked');

    checked.each((index, element) => {
      formData[element.dataset.category] = $(element).text();
    });
    $($(".hide_display")).css('display', 'none');
    $($(".hidden_display")).css('display', 'none');
    $.ajax({
      url:'/insertItem',
      method:'POST',
      data: formData,
      success: checked.each(function append_to_list(index, element) {
        var  type = element.dataset.category
        var name = $(element).text();
        let delete_button = "<form class=\"delete_item\" method=\"POST\" action=\"/delete/<%=item.id%>?_method=DELETE\"> <button class=\"delete_button\" type=\"submit\">Delete</button></form>"
        if (type === 'Movie') {
          $("<li>" + name + delete_button + "</li>")
          .appendTo(".list-unstyled.movie");
        } else if (type === 'Book') {
          $("<li>" + name + delete_button + "</li>")
          .appendTo(".list-unstyled.book");
        } else if (type === 'Purchase') {
          $("<li>" + name + delete_button + "</li>")
          .appendTo(".list-unstyled.product");
        } else if (type === 'Restaurant') {
          $("<li>" + name + delete_button + "</li>")
          .appendTo(".list-unstyled.restaurant");
        }
      }),
      error: function (err) {
        if (err) throw err;
      }
    })
  })

  //Disables search button if no field is entered
  $("#main_search_input").on('keyup', function() {
    let value = $(this).val().length;

    if(value > 0){
       $('#main_search_button').attr("disabled", false);
    } else {
      $('#main_search_button').attr("disabled", true);
    }
  })

});



