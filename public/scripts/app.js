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
    $('.cbox:checked').each((index, element) => {
      formData[element.dataset.category] = $(element).text();
    });
    console.log("I'm going to send this to your mom: ", formData);
    $.ajax({
      url:'/insertItem',
      method:'POST',
      data: formData,
      success: function (err, data) {
        console.log(err, data);
        // todo: update the page
      }
    })
  })
});


