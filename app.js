var dictionary = data || [],
    index = 0,
    delimiter = '|',
    len = dictionary.length
;

addHandlers();
updateWord(dictionary[index]);

// updates good/bad sentences in html
function updateWord(sentence) {
  var start = sentence.indexOf('['),
      end = sentence.indexOf(']'),
      goodBad = sentence.substring(start+1, end).split(delimiter),

      startStr = sentence.substr(0, start),
      endStr = sentence.substr(end + 1),
      goodStr = goodBad[0] ? ' <span class="stress">' + goodBad[0] + '</span> ' : ' ',
      badStr = goodBad[1] ? ' <span class="stress">' + goodBad[1] + '</span> ' : ' '
  ;

  // extract good/bad sentences
  var good = startStr + goodStr + endStr;
  var bad = startStr + badStr + endStr;

  // update html
  $('.good-sentence').html(good);
  $('.bad-sentence').html(bad);

}

// adds button and key handlers
function addHandlers () {

  function next() {
    index = (index + 1) % len;
    updateWord(dictionary[index]);
  }
  function prev() {
    index = (index + len - 1) % len;
    updateWord(dictionary[index]);
  }

  $('#next').click(next);
  $('#previous').click(prev);

  // ctrl + left, ctrl + right keys
  $("body").keydown(function(e) {
    // ctrl or cmd key should be pressed
    if (e.metaKey || e.ctrlKey) {
      // left
      if(e.keyCode == 37)
        prev();
      // right
      else if(e.keyCode == 39)
        next();
    }
  });
}
