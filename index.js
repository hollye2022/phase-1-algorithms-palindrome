function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(word.length-1-i)){
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
  iterate through the word

  if the  letter at index  is not the same as the letter at index word.length-1-i
  then return false

  if it iterates through every character of the word, and it is all the same

  then return true
*/

/*
  Add written explanation of your solution here

  use for loop to iterate through the word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting abc: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
