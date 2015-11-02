$(function() {

  // set global variables
  var winner = null;

  // reset to initial state of race
  var raceAgain = function() {
    $('#confetti').css({'z-index': -1, opacity: 0});
    $('#reset').addClass('tmp-hidden');
    $('.player').css({left: 0});
    winner = null;
  };

  // show confetti and reset button when winner declared
  var executeWin = function() {
    $('#confetti').css({'z-index': 1, opacity: 1});
    $('#reset').removeClass('tmp-hidden');
  };

  // movePlayer function takes keypress event and moves correct player
  var movePlayer = function(keypressEvent) {

    // returns key like 'a', 'l', etc.
    var keyCode = String.fromCharCode(keypressEvent.keyCode);
    
    // find playera and player's position
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

  // race function sets event-handlers
  var race = function() {
    $(window).on('keypress', function(event) {
      if (!winner) {
        movePlayer(event);
      }
    });
    $('#reset').on('click', function() {
      raceAgain();
    });
  };

  // call race function to start the race!
  race();

});