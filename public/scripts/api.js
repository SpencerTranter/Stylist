"use strict";
$(function(){

  function append_to_list(user_input) {
    console.log(user_input);
    // $(".checkbox").innerHTML = "";
    // $("div.checkbox").val(user_input);
    $("<input type = 'checkbox'>" + user_input + "</input>").appendTo($("#list_container"));
  };

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
          console.log("Search results (movie, purchases, restaurant, book)", data);
          for (let i in data.search_results) {
            append_to_list(data.search_results[i]);
          }
      }
  });
});
});
