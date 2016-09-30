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

  function append_to_list(user_input) {
    text(user_input).appendTo($("#list_container"));
  };

  $('#main_search').submit(function (event) {
    event.preventDefault();
    let user_input = $(this).find("input").val();
    console.log(user_input);
    if (user_input === null || user_input === '' || /^\s+$/.test(user_input)) {
      console.log("FAIL TOO SHORT");
    } else {
      console.log('Submitted, performing ajax call...');
      $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?api_key=27ad1cee7d8982e2ea91346185032d49&language=en-US&query=${user_input}`,
        method: 'GET',
        })
      .then(function(data, response) {
        console.log(data.results[0].title);
        let title = data.results[0].title;
        console.log(title);
        // return ajax({
        //   url:"/",
        //   method: GET,

        // })
      })
      .catch(function(err){
        console.log(err);
      });
    };
  });
});
