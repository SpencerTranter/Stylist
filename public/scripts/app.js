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
  $.ajax({
    url:'/insertItem',
    method:'POST',
    success: function(data) {
      console.log(data);
    }
  })
 })
});
