$(() => {
  console.log('JS yo');

  const $document = $(document);
  const audio = $('audio')[0];
  const $welcome = $('.welcome');
  const $game = $('#game');
  const sounds = [49,50,51,52,53,54,55,56];
  const $feedback = $('.feedback');
  const visuals = {
    49: {
      element: $('.first'),
      animationIn: 'fadeInDownBig',
      animationOut: 'zoomOut',
      audio: 49
    },
    50: {
      element: $('.second'),
      animationIn: 'zoomIn',
      animationOut: 'fadeOut',
      audio: 50
    },
    51: {
      element: $('.third'),
      animationIn: 'flash',
      animationOut: 'fadeOut',
      audio: 51
    },
    52: {
      element: $('.fourth'),
      animationIn: 'rotateIn',
      animationOut: 'rotateOut',
      audio: 52
    },
    53: {
      element: $('.fifth'),
      animationIn: 'flashtwo',
      animationOut: 'fadeOut',
      audio: 53
    },
    54: {
      element: $('.sixth'),
      animationIn: 'fadeInUpBig',
      animationOut: 'lightSpeedOut',
      audio: 54
    },
    55: {
      element: $('.seventh'),
      animationIn: 'shake',
      animationOut: 'fadeOut',
      audio: 55
    },
    56: {
      element: $('.eighth'),
      animationIn: 'slideInLeft',
      animationOut: 'fadeOut',
      audio: 56
    }

  };

  // current round. empty programSequence array,
  //gets filled x3 at start then (needs to be + 1 or 2 per round)!!!!
  let currentRound = 3;
  let programSequence = [];
  let userSequence = [];
  let numCode = null;


  //Playing yes/ no switch
  let playing = false;


  let currentPlayer = 'Player 1'

  if (currentRound % 2 === 0) {
    currentPlayer = 'Player 2';
  } else {
    currentPlayer = 'Player 1';
  }


  //assigns the audio src according to keypress id of keys 1-8.
  $document.keypress(function(e) {
    const pattern = visuals[`${e.charCode}`];
    visualise(pattern);
  });


  //switches playing var to true and initialzes the game :)
  //hides the welcome div
  $game.on('click', () => {
    $welcome.hide();
    playing = true;
    gameInit();
    $feedback.removeClass('hidden');
    $feedback.html(currentPlayer);
  });

  //initializes the building of the program array
  function gameInit () {
    for (let i = 0; i < currentRound; i++){
      const rand = (Math.floor(Math.random()*8));
      programSequence.push(visuals[sounds[rand]]);
    }
    console.log('initializing!');
    playBack();
  }


  // here does there need to be a game add random addition to array OR a way of using the above function just to add one?

  //this plays back the constructed program array
  let sequenceIndex = 0;


  function playBack() {
    userSequence = [];
    setTimeout(function () {
      // audio.src = `audio/${programSequence[sequenceIndex].audio}.wav`;
      // audio.play();
      if (sequenceIndex < currentRound) {
        playBack();
        visualise(programSequence[sequenceIndex]);
        $feedback.addClass('hidden');
        console.log(programSequence[sequenceIndex].audio);
        sequenceIndex++;
      } else {

        sequenceIndex = 0;

        return;
      }
    }, 1000);
  }

  function visualise (pattern) {
    // const pattern = visuals[i];
    audio.src = `audio/${pattern.audio}.wav`;
    audio.play();
    const $element = pattern.element.clone();
    $element.appendTo('main').removeClass('hidden').addClass(pattern.animationIn).removeClass(pattern.animationOut);
    setTimeout( () => {
      $element.removeClass(pattern.animationIn).addClass(pattern.animationOut);
    }, 1200);
    setTimeout( () => {
      $element.remove();
    }, 1900);
  }
  //Function pushes key charcodes the user inputs to the userSequence array.
  function listen() {
    console.log('listening...');
    $document.keypress(function(e) {
      userSequence.push(e.charCode);
      console.log(userSequence);
      compareArrays();
    });

  }
  //
  listen();

  let losses = 0;
  let count  = 0;



  // compares the two arrays when the length matches the current round.
  // not super sick,couldnt get it stop triggering on every keypress
  // if player passes test +1 is added to round length and playback starts again.
  function compareArrays() {
    const theSame = userSequence.length === programSequence.length && userSequence.every((v,i) => v === programSequence[i].audio);
    count += 1;
    if ((count === currentRound) && (losses === 0)){
      console.log(theSame);
      if (theSame === true) {
        const rand = Math.floor(Math.random()*8);
        programSequence.push(visuals[sounds[rand]]);
        userSequence = [];
        count = 0;
        playBack();
        currentRound += 1;
        $feedback.html('Pass!');
        $feedback.removeClass('hidden');
      } else if (theSame === false) {
        console.log('sudden death!');
        count = 0;
        losses += 1;
        currentRound += 1;

        $feedback.html('Fail!');
        $feedback.removeClass('hidden');
        playBack();

//this bottom part of the if else acts as the sudden death calculator portion of the game, works on whether a loss was stored in the 'losses' var.
      }
    } else if ((count === currentRound) && (losses !== 0)){
      if (theSame === true) {
        console.log('winner winner!');
        $feedback.html('Pass!');
        $feedback.removeClass('hidden');
      } else if (theSame === false) {
        console.log('tie');
        $feedback.html('Fail ---- TIE!');
        $feedback.removeClass('hidden');
      }
    }
  }


});
