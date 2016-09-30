"use strict";
$(function(){
  //debugger
$("#main_search").submit(function(e) {
    let search_text = $(this).find('#main_search_input').val()
    console.log(search_text);
    let url = "/";
    e.preventDefault();

      $.ajax({
        type: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=harry+potter',
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
