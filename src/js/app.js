$(() => {
  console.log('JS yo');



  const $document = $(document);
  const audio = $('audio')[0];
  const $welcome = $('.welcome');
  const $game = $('#game');
  const $sounds = ['49', '50','51','52','53','54','55','56'];


// current ROUND DISPLAY. IMPORTANT!!!!
  let currentRound = 3;
  let programSequence = [];


//Playing yes/ no switch
  let playing = false;


  //assigns the audio src according to keypress id of keys 1-8 BOOM!
  $document.keypress(function(e) {
    console.log(e.charCode);
    audio.src = `audio/${e.charCode}.wav`;
    audio.play();
  });


//switches playing var to true and initialzes the game :)
  $game.on('click', () => {
    // $welcome.addClass('.hidden');
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
    console.log(programSequence);
    playBack();
  }


// here does there need to be a game add random addition to array OR a way of using the above function just to add one?

//this plays back the program array but all at once at the moment, needs time delay asap
  function playBack () {
    for (let i =0; i < programSequence.length; i++){
      audio.src = `audio/${programSequence[i]}.wav`;
      audio.play();
      console.log(programSequence[i]);
    }
  }


});
