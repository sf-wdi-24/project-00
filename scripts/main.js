$(function() {

  // global variables
  $confetti = $('#confetti');
  $reset = $('#reset');
  var winner = null;


  // HELPER FUNCTIONS

  // reset to initial state of race
  var raceAgain = function() {
    $confetti.css({'z-index': -1, opacity: 0});
    $reset.addClass('tmp-hidden');
    $('.player').css({left: 0});
    winner = null;
  };

  // show confetti and reset button when winner declared
  var executeWin = function() {
    $confetti.css({'z-index': 1, opacity: 1});
    $reset.removeClass('tmp-hidden');
  };

  // take keypress event and move correct player
  var movePlayer = function(keypressEvent) {

    // returns key like 'a', 'l', etc.
    var keyCode = String.fromCharCode(keypressEvent.keyCode);
    
    // find player and player's position
    var $player = $('[data-key="' + keyCode + '"]');
    var leftPosition = $player.offset().left;

    // set player's new position (move forward)
    $player.css({left: leftPosition + 10});

    // if player moved past end of track
    if ($player.offset().left >= $('#track').width() - $player.width()) {
      
      // set winner to player and execute win
      winner = $player;
      executeWin();
    }
  };

  // add event-handlers
  var race = function() {
    $(window).on('keypress', function(event) {
      if (!winner) {
        movePlayer(event);
      }
    });
    $reset.on('click', function() {
      raceAgain();
    });
  };

  // start the race!
  race();

});