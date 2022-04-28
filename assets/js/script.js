
  $(".count__down__section")
  .countdown("2022/12/31", function(event) {
    $('#day').text(
      event.strftime('%D')
    );
    $('#hours').text(
      event.strftime('%H')
    );
    $('#minutes').text(
      event.strftime('%M')
    );
    $('#seconds').text(
      event.strftime('%S')
    );
  });