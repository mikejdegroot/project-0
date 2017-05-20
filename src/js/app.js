$(() => {
  console.log('JS yo');

  const $document = $(document);
  const audio = $('audio')[0];
  const $welcome = $('.welcome');
  const $game = $('#game');
  const $sounds = ['49', '50','51','52','53','54','55','56'];


  // current ROUND DISPLAY. empty programSequence array,
  //gets filled x3 at start then (needs to be + 1 or 2 per round)!!!!
  let currentRound = 3;
  let programSequence = [];
  let userSequence = [];
  let compare = [];
  let count = 0;



  //Playing yes/ no switch
  let playing = false;


  //assigns the audio src according to keypress id of keys 1-8 BOOM!
  $document.keypress(function(e) {
    console.log(e.charCode);
    audio.src = `audio/${e.charCode}.wav`;
    audio.play();
  });


  //switches playing var to true and initialzes the game :)
  //hides the welcome div
  $game.on('click', () => {
    $welcome.hide();
    playing = true;
    console.log(playing);
    gameInit();
  });

  //initializes the building of the program array
  function gameInit () {
    for (let i = 0; i < currentRound; i++){
      console.log('initializing!');
      const rand = (Math.floor(Math.random()*8));
      programSequence.push($sounds[rand]);
    }
    playBack();
  }


  // here does there need to be a game add random addition to array OR a way of using the above function just to add one?

  //this plays back the program array but all at once at the moment, needs time delay asap
  let timerid = 0;


  function playBack() {
    setTimeout(function () {
      // console.log('Hello');
      audio.src = `audio/${programSequence[timerid]}.wav`;
      audio.play();
      timerid++;
      if (timerid < currentRound) {
        playBack();
      } else {
        listen();
        timerid = 0;
        console.log(programSequence);
      }
    }, 1500);
  }

  //Function pushes key charcodes the user inputs to the userSequence array.
  function listen() {
    console.log('listening...');
    $document.keypress(function(e) {
      userSequence.push(e.charCode.toString());
      // console.log(userSequence);
      compareArrays();
    });

  }
  //
  // compares the two arrays when the length matches the current round. at the moment converts the number to string using ==, which is not ideal but it works
  function compareArrays() {
    // if (userSequence.length === programSequence.length){
    //   for (let i = 0; i <programSequence.length; i++){
    //     if (programSequence[i] == userSequence[i]){
    //       compare.push('win');
    //     }else {
    //       compare.push('loose');
    //       // console.log(compare);
    //     }
    //   }
    // }
    // function isWin(element, index, array) {
    //   return element === 'win';
    // }
    //console.log(compare.every(isWin));
    count += 1;
    const theSame = userSequence.length === programSequence.length && userSequence.every((v,i)=> v === programSequence[i]);
    if (count === currentRound) {
      console.log(theSame);
      if (theSame === true) {
        const rand = Math.floor(Math.random());
        programSequence.push($sounds[rand]);
        currentRound += 1;
        clearInterval(timerid);
        playBack();

      }
    }// return theSame;
  }

    // function nextRound () {
    //   if (theSame === true) {
    //     const rand = Math.floor(Math.random());
    //     programSequence.push($sounds[rand]);
    //   }
    // }

  // attach the .equals method to Array's prototype to call it on any array
  // Array.prototype.equals = function (array) {
  //   // if the other array is a falsy value, return
  //   if (!array)
  //     return false;
  //
  //   // compare lengths - can save a lot of time
  //   if (this.length !== array.length)
  //     return false;
  //
  //   for (var i = 0, l=this.length; i < l; i++) {
  //     // Check if we have nested arrays
  //     if (this[i] instanceof Array && array[i] instanceof Array) {
  //       // recurse into the nested arrays
  //       if (!this[i].equals(array[i]))
  //         return false;
  //     } else if (this[i] !== array[i]) {
  //       // Warning - two different object instances will never be equal: {x:20} != {x:20}
  //       return false;
  //     }
  //   }
  //   return true;
  // };
  // // Hide method from for-in loops
  // Object.defineProperty(Array.prototype, 'equals', {enumerable: false});
  //
  // console.log(programSequence.equals(userSequence));




  //
  // function winner(element, index, compare) {
  //   return element = 'win';
  // }
  //
  // compare.every(winner);

});
