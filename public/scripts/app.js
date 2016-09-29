$(() => {
  $('.dropdown-menu').dropdown();

  $('.email').focus();

  $.ajax({
    method: "GET",
    url: "/api/users",
    success: function(users) {
      users.forEach(function(list) {
        create_list(list);
      })
    },
    error: error_handler
  });

  function error_handler (err) {
    console.error('Encountered error while performning action', err);
  };

  function append_to_list(user_item) {
    $("<div>").text(user_item.item).appendTo($("container"));
  };

  function create_list(list) {
    let $container = $("<article>").addClass("list");
    let $header = $("<header />");
    let $name = $('<span class = "name">' + list.name + '</span>');
    let $list_items = $('<div class = "list_items">' + list.items + '</div>');

    ($header).append($name);
    ($container).append($header, $list_items);

    return $container;
  };



});






//  $('form').on('submit', function (event) {
//     event.preventDefault();

//     let user_item = $(this).find("textarea").val();
//     let text = $(this).serialize();
//     let url = this.action + '?' + text;

//     if (user_item === null || user_item === '' || /^\s+$/.test(user_item)) {
//       $("form.placeholder").text("Nothing to post!").css('color', 'red');
//       console.log("FAIL TOO SHORT");
//     } else {
//       console.log('Submitted, performing ajax call...');
//       $.ajax({
//         url: '/apis',
//         method: 'POST',
//         data: $(this).serialize(),
//         success: append_to_list,
//         error: function(err) {
//           console.log("ajax error!", err);
//         }
//       });
//     }
//   });


