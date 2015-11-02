// wait for DOM to load before running JS
$(function() {

  $(window).on('keypress', function(event) {
    var keyCode = event.keyCode;
    var keyCodeString = String.fromCharCode(keyCode);
    console.log(keyCodeString);

    var $player = $('*[data-key="' + keyCodeString + '"]');
    console.log($player);
  });

});