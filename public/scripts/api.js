"use strict";
$(function(){


  function append_to_list(type, result) {
    $("<input type = 'checkbox'>" + type + ": " + result + "</input>").appendTo($("#list_container"));
    $("<br />").appendTo("#list_container");

  };

  $("#main_search").submit(function(e) {
      let url = "/";
      e.preventDefault();
      let search_text = $(this).find('#main_search_input').val()
      search_text = search_text.split(' ').join('+');

    if (search_text === null || search_text === '' || /^\s+$/.test(search_text)) {
      alert("Failed: Empty form.");
    }

      $.ajax({
        type: "POST",
        url: '/routes/api',
        data: {search: search_text},
        success: function(data) {
          console.log("Search results (movie, purchases, restaurant, book)", data);

          $('#list_container').empty();
          for (let i in data.search_results) {
            let types = ['Movie', 'Purchase', 'Restaurant', 'Book'];
            if (data.search_results[i]) {
              append_to_list(types[i], data.search_results[i]);
            }

          }
        }
      });
  });
});
