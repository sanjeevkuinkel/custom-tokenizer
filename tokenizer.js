function gptTokenizer(inputString) {
  //SPLIT THE INPUT STRING INTO AN ARRAY OF TOKENS
  //HERE YOU AN DEFINE MORE SOPHISTICATED TOKENIZATION RULES
  //FOR SIMPLICITY,WE WILL JUST SPLITS THE INPUT BY WHITESPACE
  return inputString.split(/\s+/).filter((token) => token.trim() !== "");
}
const input = "Hello,how are you";
const tokens = gptTokenizer(input);
console.log(tokens); // Output: [ 'Hello,how', 'are', 'you' ]
