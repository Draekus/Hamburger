$(function () {

  $('.devour-button').on('click', function(event) {
    
    let burger = {
      id: $(this).data('id'),
      devoured: 1
    };

    console.log(`This burgers id is ${burger.id}`);

    $.ajax("/api/burgers/", {
      type: "PUT",
      data: burger
    }).then(function () {
          // Reload the page
          location.reload();
      }
  );
  })

  $('.submit-button').on('click', function(event) {
    // Stop the default form submition behavior
    event.preventDefault();

    let name = $('#burger-input').val().trim();
    console.log(name)
    let burger = {
      burger_name: name
    };

    $.ajax("/api/burgers/", {
      type: "POST",
      data: burger
    }).then(function() {
          // Reload the page
          location.reload();
      });

  });

});