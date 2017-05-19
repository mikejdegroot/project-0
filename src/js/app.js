$(() => {
  console.log('JS yo');


  const audio = $('audio')[0];
  const $document = $(document);


//assigns the audio src according to keypress id of keys 1-8 BOOM!
  $document.keypress(function(e) {
    console.log(e.charCode);
    audio.src = `audio/${e.charCode}.wav`;
    audio.play();
  });








});
