$(() => {
  $('.dropdown-menu').dropdown();

(function load () {
  $.ajax({
    method: "GET",
    url: "http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json",
  })
  .then(function(data, response) {
    let title = data.Title;
    console.log(title);
    // return ajax({
    //   url: "/search"
    //   method: "POST",
    //   data:
    // })
  })
  .catch(function(err){
    console.log(err);
  });
}) ();

  function error_handler (err) {
    console.error('Encountered error while performning action', err);
  };

  function append_to_list(user_item) {
    $("<li>").text(user_item).appendTo($(".movie"));
  };

  $('.searchForm').on('submit', function (event) {
    console.log($(this));
    event.preventDefault();
    console.log(event);

    let user_item = $(this).find("textarea").val();
    let text = $(this).serialize();

    // if (user_item === null || user_item === '' || /^\s+$/.test(user_item)) {
    //   $("form.placeholder").text("Nothing to post!").css('color', 'red');
    //   console.log("FAIL TOO SHORT");
    // } else {
    //   console.log('Submitted, performing ajax call...');
    //   $.ajax({
    //     url: '/apis',
    //     method: 'POST',
    //     data: $(this).serialize(),
    //     success: append_to_list,
    //     error: function(err) {
    //       console.log("ajax error!", err);
    //     }
    //   });
    });
});







