$(function () {
  $('.devour-it').on('click', function (e) {
    e.preventDefault();
    const id = $(this).data('id');
    const devouredState = {
      devoured: true
    };

    $.ajax("/api/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("Changed Devoured to true");
        location.reload();
      });
  });

  $('#submit-form').on('click', function (e) {
    e.preventDefault();
    const burgerName = $('#text-input').val().trim();
    if (burgerName.length > 0) {
      const newBurger = { burgerName: burgerName };
      $.ajax("/api/", {
        type: "POST",
        data: newBurger
      }).then(function () {
        console.log("Added a New Burger ", burgerName);
        location.reload();
      })
    } else {
      $('.alert-span').html(`<div id="alert-clip" >Please provide a name for your burger!</div><br/>`);
      setTimeout(() => { $('.alert-span').empty(); }, 600);
    }
  })

});