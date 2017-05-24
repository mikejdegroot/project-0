$(() => {
  console.log('JS yo');

  const $document = $(document);
  // const $checkbox = $('checkbox');
  const audio = $('audio')[0];
  const $welcome = $('.welcome');
  const $game = $('#game');
  const $playground = $('#playground');
  const $feedback = $('.feedback');
  const $reset = $('.reset');
  const $endGame = $('.endgame');
  const $switch = $('.switch');
  const $numberDisplay = $('.numberDisplay')

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
  let numCode = null;


  //Playing yes/ no switch
  let messing = false;
  let playing = false;


  let currentPlayer = 'player 1';


  $game.on('click', () => {
    $welcome.hide();
    playing = true;
    $feedback.removeClass('hidden');
    $feedback.html(currentPlayer);
    buildGame();
    keyListener();
    setTimeout(gameInit, 3000);
  });


  $playground.on('click', () => {
    $welcome.hide();
    messing = true;
    $endGame.removeClass('hidden');
    buildGame();
    keyListener();

  });


  //assigns the audio src according to keypress id of keys 1-8.
  function keyListener () {
    $document.keypress(function(e) {
      const key = visuals[e.key];
      if ((playing === true) || (messing === true) && key) {
        const skey = e.key;
        visualise(key);
        $numberDisplay.removeClass('hiddener');
        $numberDisplay.html(skey);
        setTimeout(hideKey, 500);
      }
    });
  }

  //switches playing var to true and initialzes the game :)
  //hides the welcome div



  function buildGame() {
    userSequence = [];
    programSequence = [];
    listen();
  }



  $switch.on('change', () => {
    console.log('checked');
    hardMode();
  });


  function hardMode () {
    $numberDisplay.toggleClass('hidden');
  }





  function updatePlayer () {
    if (currentPlayerNum % 2 === 0) {
      currentPlayer = 'Player 2';
      // console.log(currentRound);
    } else {
      currentPlayer = 'Player 1';
    }
  }


  //
  function easyPlay (key) {
    $numberDisplay.removeClass('hiddener');
    $numberDisplay.html(key);
    setTimeout(hideKey, 500);

  }


  function hideKey() {
    $numberDisplay.addClass('hiddener');
  }


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
      if (sequenceIndex < currentRound) {
        playBack();
        // easyPlay(key);
        visualise(programSequence[sequenceIndex]);
        $feedback.addClass('hidden');
        $feedback.html(currentPlayer);
        console.log(programSequence[sequenceIndex].audio);
        console.log(userSequence);
        sequenceIndex++;
      } else {
        sequenceIndex = 0;
        userSequence = [];
        return;
      }
    }, 1000);
  }

  function visualise (key) {
    audio.src = `src/assets/audio/${key.audio}.wav`;
    audio.play();
    easyPlay(key.audio);
    // console.log('thistha ' + key);
    // easyPlay(programSequence[sequenceIndex]);
    const $element = key.element.clone();
    $element.appendTo('main').removeClass('hidden').addClass(key.animationIn).removeClass(key.animationOut);
    setTimeout( () => {
      $element.removeClass(key.animationIn).addClass(key.animationOut);
    }, 1200);
    setTimeout( () => {
      $element.remove();
    }, 1900);


    // const $newdiv = $( '<div id="easy"></div>' );
    // if ($switch.checked) {
    //   console.log('switchy checked!!');
    //   // $newdiv.appendTo('main')
    // }

  }

  //Function pushes key charcodes the user inputs to the userSequence array.
  function listen() {
    // if (playing === true) {
    console.log('listening...');
    $document.keypress(function(e) {
      userSequence.push(parseInt(e.key));
      // console.log(userSequence);
      compareArrays();
    });

  }

  let losses = 0;
  let count  = 0;



  // compares the two arrays when the length matches the current round.
  // not super sick,couldnt get it stop triggering on every keypress
  // if player passes test +1 is added to round length and playback starts again.
  function compareArrays() {
    const theSame = userSequence.length === programSequence.length && userSequence.every((v,i) => v === programSequence[i].audio);
    console.log('checking');
    count += 1;
    if ((count === currentRound) && (losses === 0) && (messing !== true) && (playing === true)) {
      console.log(theSame);
      if (theSame === true) {
        const rand = (Math.floor(Math.random()*8));
        programSequence.push(visuals[sounds[rand]]);
        // console.log(programSequence);
        userSequence = [];
        count = 0;
        currentRound += 1;
        currentPlayerNum += 1;
        updatePlayer();
        $feedback.html('Pass! - next up ' + currentPlayer);
        $feedback.removeClass('hidden');
        setTimeout(playBack, 3000);
      } else if ((theSame === false) && (messing !== true)) {
        userSequence = [];
        count = 0;
        losses += 1;
        currentPlayerNum += 1;
        setTimeout(playBack, 3000);
        updatePlayer();
        $feedback.html('Fail! sudden death!! -next up ' + currentPlayer);
        $feedback.removeClass('hidden');



        //this bottom part of the if else acts as the sudden death calculator portion of the game, works on whether a loss was stored in the 'losses' var.
      }
    } else if ((count === currentRound) && (losses !== 0) && (messing !== true)){
      if (theSame === true) {
        $feedback.html(currentPlayer + ' Wins!');
        $feedback.removeClass('hidden');
        $endGame.removeClass('hidden');
      } else if ((theSame === false) && (messing !== true)) {
        $feedback.html(currentPlayer + ' Fails!! ---- TIE!');
        $feedback.removeClass('hidden');
        $endGame.removeClass('hidden');

      }
    }
  }

  $endGame.on('click', () => {
    currentRound = 3;
    currentPlayerNum = currentRound;
    programSequence = [];
    userSequence = [];
    playing = false;
    messing = false;
    updatePlayer();
    losses = 0;
    count = 0;
    $feedback.html('');
    $welcome.show();
    $endGame.addClass('hidden');
  });


});
