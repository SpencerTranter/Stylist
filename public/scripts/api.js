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

      if (search_text === null || search_text === '' || /^\s+$/.test(search_text)) {
      alert("Failed: Empty form.");
    }
      //console.log(search_text);

      // let api_url = `https://developers.zomato.com/api/v2.1/search?entity_id=256&entity_type=city&q=${search_text}`;
      // let gapi_url = `https://www.googleapis.com/books/v1/volumes?q=${search_text}`;

      $.ajax({
        type: "POST",
        url: '/routes/api',
        data: {search: search_text},   //$("#main_search").serialize(),
        success: function(data) {
          console.log("Search results (movie, purchases, restaurant, book)", data);
          for (let i in data.search_results) {
            append_to_list(data.search_results[i]);
          }
      }
  });
});
});
