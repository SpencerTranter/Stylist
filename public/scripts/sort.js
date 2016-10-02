
  $(function(){

    $( ".list-unstyled" ).sortable({
      connectWith: ".list-unstyled",
      revert: true,
      scroll: false,
      dropOnEmpty: true,
      appendTo: '.lists',
      helper: 'clone',


      stop: function(event, ui) {
        let parentName = event.target.parentElement.className;
        let targetName = ui.item[0].offsetParent.className;
        let itemName = ui.item[0].textContent;
        console.log('STOPPED', parentName);
        console.log(itemName, targetName);

        $.ajax({
          type: "POST",
          url: '/updateTable',
          data: {parentName, targetName, itemName},
          success: console.log('ABCHEY IT WORKEDD')
        })
      }
    }).disableSelection();

  });
