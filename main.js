// wait for DOM to load before running JS
$(function() {

  var winner = null;

  $(window).on('keypress', function(event) {
    if (!winner) {
      var keyCode = event.keyCode;
      var keyCodeString = String.fromCharCode(keyCode);
      console.log(keyCodeString);

      var $player = $('*[data-key="' + keyCodeString + '"]');
      console.log($player.offset());

      var left = $player.offset().left;

      var trackWidth = $('#track').width();

      $player.css({left: left + 10});

      if ($player.offset().left >= trackWidth - 80) {
        winner = $player;
        console.log('player', $player.attr('data-key'), 'wins!!!');
      }
    }

  });

});