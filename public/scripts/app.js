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
          .appendTo(".list-unstyled.movie");
        } else if (type === 'Book') {
          $("<li>" + name + "</li>")
          .appendTo(".list-unstyled.book");
        } else if (type === 'Purchase') {
          $("<li>" + name + "</li>")
          .appendTo(".list-unstyled.product");
        } else if (type === 'Restaurant') {
          $("<li>" + name + "</li>")
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


// $.fn.isolatedScroll = function() {
//     this.bind('mousewheel DOMMouseScroll', function (e) {
//         var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
//             bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
//             topOverflow = this.scrollTop <= 0;

//         if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
//             e.preventDefault();
//         }
//     });
//     return this;
// };

// $('.restaurants').isolatedScroll();
// $('.movies').isolatedScroll();



});



