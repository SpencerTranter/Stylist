"use strict";
$(function(){

  function show_to_user(type, result) {
    $("<input type='checkbox' data-category='" + type + "'>" + type + ": " + result + "</input>")
      .addClass('cbox')
      .text(result)
      .appendTo($("#list_container"));
    $("<br />").appendTo("#list_container");
    $($(".hide_display")).css('display', 'block');
    $($(".hidden_display")).css('display', 'block');
    $("#main_search")[0].reset();
  };

  $("#main_search").submit(function(e) {
    let url = "/";
    e.preventDefault();
    let search_text = $(this).find('#main_search_input').val()
    search_text = search_text.split(' ').join('+');

    if (search_text === null || search_text === '' || /^\s+$/.test(search_text)) {
      return;
    }
    $.ajax({
      type: "POST",
      url: '/routes/api',
      data: {search: search_text},
      success: function(data) {
        console.log("Search results (movie, purchases, restaurant, book)", data);

        $('#list_container').empty();

        for (let i in data.search_results) {
          let types = ['Restaurant', 'Movie', 'Book', 'Purchase'];
          let user_data = data.search_results[i];
          //console.log(user_data);
          if (data.search_results[i]) {
            show_to_user(types[i], data.search_results[i]);
          }
          //console.log("Array", data.search_results);
        }
        if ($('#list_container').is(':empty')){
          alert("Sorry, no results");
        }

        }
    });
  });


});

