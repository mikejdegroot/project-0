$(() => {
  console.log('JS yo');
  const $document = $(document);
  const audio = $('audio')[0];
  const $welcome = $('.welcome');
  const $game = $('#game');
  const $playground = $('#playground');
  const $feedback = $('.feedback');
  const $endGame = $('.endgame');
  const $switch = $('.switch');
  const $numberDisplay = $('.numberDisplay');
  const sounds = [1, 2, 3, 4, 5, 6, 7, 8];
  const visuals = {
    1: {
      element: $('.first'),
      animationIn: 'fadeInDownBig',
      animationOut: 'zoomOut',
      audio: 1
    },
    2: {
      element: $('.second'),
      animationIn: 'zoomIn',
      animationOut: 'fadeOut',
      audio: 2
    },
    3: {
      element: $('.third'),
      animationIn: 'flash',
      animationOut: 'fadeOut',
      audio: 3
    },
    4: {
      element: $('.fourth'),
      animationIn: 'rotateIn',
      animationOut: 'rotateOut',
      audio: 4
    },
    5: {
      element: $('.fifth'),
      animationIn: 'flashtwo',
      animationOut: 'fadeOut',
      audio: 5
    },
    6: {
      element: $('.sixth'),
      animationIn: 'fadeInUpBig',
      animationOut: 'lightSpeedOut',
      audio: 6
    },
    7: {
      element: $('.seventh'),
      animationIn: 'shake',
      animationOut: 'fadeOut',
      audio: 7
    },
    8: {
      element: $('.eighth'),
      animationIn: 'slideInLeft',
      animationOut: 'fadeOut',
      audio: 8
    }

  };

  // current round. empty programSequence array,
  //gets filled x3 at start then is +1 per round
  let currentRound = 3;
  let currentPlayerNum = currentRound;
  let programSequence = [];
  let userSequence = [];
  let currentPlayer = 'player 1';

  //Playing/messing mode vars for game or playground
  let messing = false;
  let playing = false;

  //game button click function- shows current player, switches playing to true and  launches the key listener and the buildgame function.
  $game.on('click', () => {
    $welcome.hide();
    playing = true;
    messing = false;
    buildGame();
    $feedback.removeClass('hidden');
    $feedback.html(currentPlayer);
    setTimeout(gameInit, 3000);
  });

  //playground button key listener.
  $playground.on('click', () => {
    $welcome.hide();
    messing = true;
    playing = false;
    $endGame.removeClass('hidden');
    buildGame();
    $document.keypress(keyListener);

  });

  //sets the game board up as it should be at the beginning of round- especially matters after the reset is pressed.
  function buildGame() {
    userSequence = [];
    programSequence = [];
    currentRound = 3;
    currentPlayerNum = currentRound;
    updatePlayer();
    losses = 0;
    count = 0;
    currentPlayer = 'Player 1';
  }

  //activates the key listener function when called and attached to the document from the game/playground buttons. then pushes the key code (1-8) down to the visualise function and numberDisplay element(for the easy mode).
  function keyListener(e) {
    if ((playing || messing) && visuals[e.key]) {
      const key = visuals[e.key];
      const skey = e.key;
      visualise(key);
      userSequence.push(parseInt(e.key));
      $numberDisplay.removeClass('hiddener');
      $numberDisplay.html(skey);
      setTimeout(hideKey, 500);
      compareArrays();
    }
  }

  // activates the hard mode when button is checked, removing the large numbers
  $switch.on('change', () => {
    console.log('checked');
    $numberDisplay.toggleClass('hidden');

  });

  //this function takes the keys pushed from the visuals function and translates them into the easymode large numbers on screen
  function easyPlay (key) {
    $numberDisplay.removeClass('hiddener');
    $numberDisplay.html(key);
    setTimeout(hideKey, 500);

  }

  //hides the easy nums after the time dictated in the functions above.
  function hideKey() {
    $numberDisplay.addClass('hiddener');
  }

  //initializes the building of the program array, generates a number from 1-8 randomly and *3 to create first array.
  function gameInit () {
    for (let i = 0; i < currentRound; i++){
      const rand = (Math.floor(Math.random()*8));
      programSequence.push(visuals[sounds[rand]]);
    }
    playBack();
  }

  //allows the sequence to restart after the last round, stopping it from just playing the end number.
  let sequenceIndex = 0;

  //this plays back the constructed program array from start to finish. also hides the current player feedback. and console logs the program seq array for cheating.
  function playBack() {
    setTimeout(function () {
      if (sequenceIndex < currentRound) {
        visualise(programSequence[sequenceIndex]);
        $feedback.addClass('hidden');
        $feedback.html(currentPlayer);
        // console.log(programSequence[sequenceIndex].audio);
        playBack();
        sequenceIndex++;
      } else {
        sequenceIndex = 0;
        $document.keypress(keyListener);
      }
    }, 1000);
  }

  //takes the code pushed down from the keylistener and the playback and translates it to play the audio src and animate the divs at the same time. clones the relevant div and appends it to the body also, allowing for overlaps. then deletes itself after nearly 2 secs.
  function visualise (key) {
    audio.src = `src/assets/audio/${key.audio}.wav`;
    audio.play();
    easyPlay(key.audio);
    const $element = key.element.clone();
    $element.appendTo('main').removeClass('hidden').addClass(key.animationIn).removeClass(key.animationOut);
    setTimeout( () => {
      $element.removeClass(key.animationIn).addClass(key.animationOut);
    }, 1200);
    setTimeout( () => {
      $element.remove();
    }, 1900);
  }

  let losses = 0;
  let count  = 0;

  // compares the two arrays when the length matches the current round.
  // if player passes test +1 is added to round length and playback starts again.
  function compareArrays() {
    const theSame = userSequence.length === programSequence.length && userSequence.every((v,i) => v === programSequence[i].audio);
    count += 1;
    if ((count === currentRound) && (losses === 0) && (playing)) {
      console.log(theSame);
      if (theSame) {
        currentRound += 1;
        roundAddMath();
        roundReset();
        $feedback.html('Pass! - next up ' + currentPlayer);
        $feedback.removeClass('hidden');
        stopBind();
        setTimeout(playBack, 3000);
      } else if (!theSame) {
        losses += 1;
        roundReset();
        stopBind();
        setTimeout(playBack, 3000);
        $feedback.html('Fail! sudden death!! -next up ' + currentPlayer);
        $feedback.removeClass('hidden');
        //this bottom part of the if else acts as the sudden death calculator portion of the game, works on whether a loss was stored in the 'losses' var.
      }
    } else if ((count === currentRound) && (losses !== 0)){
      if (theSame) {
        $feedback.html(currentPlayer + ' Wins!');
        $feedback.removeClass('hidden');
        $endGame.removeClass('hidden');
      } else if (!theSame) {
        $feedback.html(currentPlayer + ' Fails!! ---- TIE!');
        $feedback.removeClass('hidden');
        $endGame.removeClass('hidden');

      }
    }
  }

  //function is called from the compare arrays function and ups the program array by 1 randomly generated number.
  function roundAddMath () {
    const rand = (Math.floor(Math.random()*8));
    programSequence.push(visuals[sounds[rand]]);
  }

  // this resets the round after a first time win or fail, allowing for the current player to change but not the round number for sudden death.
  function roundReset () {
    userSequence = [];
    count = 0;
    currentPlayerNum += 1;
    updatePlayer();
  }

  //updates the current player as the rounds increase- has to be current player num due to the current player needing to update independently from the current round for the sudden death round
  function updatePlayer () {
    if (currentPlayerNum % 2 === 0) {
      currentPlayer = 'Player 2';
    } else {
      currentPlayer = 'Player 1';
    }
  }

  function stopBind () {
    $document.unbind('keypress', keyListener);
  }

  $endGame.on('click', () => {
    playing = false;
    messing = false;
    losses = 0;
    count = 0;
    $feedback.html('');
    $welcome.show();
    $endGame.addClass('hidden');
    stopBind();
  });

});



//to do - make the key listen only work once the key has played back
//massively reduce the compare arrays function, maybe move add math out.
