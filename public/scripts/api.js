"use strict";
$(function(){

  $("#main_search").submit(function(e) {
      let url = "/";
      e.preventDefault();

      let search_text = $(this).find('#main_search_input').val()
      search_text = search_text.split(' ').join('+');

      let api_url = `https://www.googleapis.com/books/v1/volumes?q=${search_text}`;

      $.ajax({
        type: "GET",
        url: api_url,
        data: $("#main_search").serialize(),
        success: function(data) {
          for (var i = 0; i < data.items.length; i++) {
          var item = data.items[i];
          console.log(item.volumeInfo.title);
          }
        }
      });
  });

});
