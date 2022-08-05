const words = ["This", "is", "JavaScript", "Coding!"];
var sentence = "";
function createSentence() {
  for(let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }
  console.log(sentence);
}
createSentence();