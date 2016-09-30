"use strict";
$(function(){

  $("#main_search").submit(function(e) {
      let url = "/";
      e.preventDefault();

      let search_text = $(this).find('#main_search_input').val()
      search_text = search_text.split(' ').join('+');

      $.ajax({
        type: "POST",
        url: '/routes/api',
        data: {search: search_text},
        success: function(data) {
          conole.log(data);
        }
      });
  });

});
