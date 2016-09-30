"use strict";
$(function(){

  $("#main_search").submit(function(e) {
      let url = "/";
      e.preventDefault();

      let search_text = $(this).find('#main_search_input').val()
      search_text = search_text.split(' ').join('+');
      //console.log(search_text);

      // let api_url = `https://developers.zomato.com/api/v2.1/search?entity_id=256&entity_type=city&q=${search_text}`;
      // let gapi_url = `https://www.googleapis.com/books/v1/volumes?q=${search_text}`;

      $.ajax({
        type: "POST",
        url: '/routes/api',
        data: {search: search_text},   //$("#main_search").serialize(),
        success: function(data) {
          console.log("I'm a movie", data);
        }
      });
  });

});
