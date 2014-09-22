var dictionary = [
  "The woman [who|which] works here is from Japan.",
  "She's married [to|with] a dentist.",
  "She was [bored|boring] in the class."
];

var index = 0,
    delimiter = '|',
    len = dictionary.length
;

addHandlers();
updateWord(dictionary[index]);


// updates good/bad sentences in html
function updateWord(sentence) {
  var start = sentence.indexOf('['),
      end = sentence.indexOf(']'),
      goodBad = sentence.substring(start+1, end).split(delimiter)
  ;

  // extract good/bad sentences
  var good = sentence.substr(0, start) + '<span class="stress">' + goodBad[0] + '</span>' + sentence.substr(end + 1);
  var bad = sentence.substr(0, start) + '<span class="stress">' + goodBad[1] + '</span>' + sentence.substr(end + 1);

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
