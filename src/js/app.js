$(() => {
  console.log('JS yo');

  const $document = $(document);
  const audio = $('audio')[0];
  const $welcome = $('.welcome');
  const $game = $('#game');
  const $sounds = ['49', '50','51','52','53','54','55','56'];


  // current round. empty programSequence array,
  //gets filled x3 at start then (needs to be + 1 or 2 per round)!!!!
  let currentRound = 3;
  let programSequence = [];
  let userSequence = [];
  let compare = [];


  //Playing yes/ no switch
  let playing = false;


  //assigns the audio src according to keypress id of keys 1-8.
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
    gameInit();
  });

  //initializes the building of the program array
  function gameInit () {
    for (let i = 0; i < currentRound; i++){
      const rand = (Math.floor(Math.random()*8));
      programSequence.push($sounds[rand]);
    }
    console.log('initializing!');
    playBack();
  }


  // here does there need to be a game add random addition to array OR a way of using the above function just to add one?

  //this plays back the constructed program array
  let timerid = 0;


  function playBack() {
    setTimeout(function () {
      audio.src = `audio/${programSequence[timerid]}.wav`;
      audio.play();
      timerid++;
      if (timerid < currentRound) {
        playBack();
      } else {

        timerid = 0;
        console.log(programSequence);
      }
    }, 1000);
  }

  //Function pushes key charcodes the user inputs to the userSequence array.
  function listen() {
    console.log('listening...');
    $document.keypress(function(e) {
      userSequence.push(e.charCode.toString());
      console.log(userSequence);
      compareArrays();
    });

  }
  //
  listen();


  let count  = 0;
  // compares the two arrays when the length matches the current round. at the moment converts the number to string using ==, which is not ideal but it works
  function compareArrays() {
    console.log('yo'+count);

    const theSame = userSequence.length === programSequence.length && userSequence.every((v,i) => v === programSequence[i]);
    count += 1;
    if (count === currentRound) {
      console.log(theSame);
      if (theSame === true) {
        let rand = Math.floor(Math.random()*8);
        programSequence.push($sounds[rand]);
        userSequence = [];
        count = 0;
        playBack();
        currentRound += 1;
      }
    }
  }

});
