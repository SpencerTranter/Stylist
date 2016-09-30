'use strict';

$(() => {

$('.email').focus();
$('#email').focus();

$('.dropdown-menu').dropdown();


//     url: "http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json",


  function append_to_list(search_text) {
    $("<li>").text(search_text).appendTo($(".movie"));
  };

  $('#main_search').submit(function (event) {
    event.preventDefault();
    let search_text = $(this).find("input").val();
    console.log(search_text);
    if (search_text === null || search_text === '' || /^\s+$/.test(search_text)) {
      console.log("FAIL TOO SHORT");
    } else {
      console.log('Submitted, performing ajax call...');
      $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?api_key=27ad1cee7d8982e2ea91346185032d49&language=en-US&query=${search_text}`,
        method: 'GET',
        })
      .then(function(data, response) {
        data.results.forEach(function(movie){
          console.log(movie.title);
        })
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
