// Reverses a string.
function reverse(string) {
  return ((Array.from(string)).reverse()).join("");
}

// Checks to see if a string is a palindrome, not accounting for capitalization
function palindrome(string) {
  let str = (string.toLowerCase())
  return (str == reverse(str));
}

function emailParts(email) {
  let charArray = email.split("");
  let index_at = charArray.indexOf('@');
  let index_per = charArray.indexOf('.');

  return [charArray.slice(0,index_at).join(""), charArray.slice(index_at + 1, index_per).join("")];
  
  }

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }
  
  //Returns content processed to lowercase for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  //Returns true iff the phrase is a palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() == this.processedContent().reverse(); 
  }
}

