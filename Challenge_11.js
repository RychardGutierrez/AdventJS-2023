/*
In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.

A palindrome is a word that reads the same forwards and backwards. The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.

Create a function getIndexsForPalindrome that receives a string and returns:

If it is already a palindrome, an empty array.
If it is not possible, null.
If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.
For example:

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
If the palindrome can be formed with different swaps, always return the first one found.
*/

function getIndexsForPalindrome(word) {
  const isPalindrome = (word) => word.split('').reverse().join('') === word;
  if (isPalindrome(word)) {
    return [];
  }

  const swap = (word, start, end) => {
    const newWord = word.split('');
    [newWord[start], newWord[end]] = [newWord[end], newWord[start]];

    return newWord.join('');
  };

  for (let start = 0; start < word.length; start++) {
    for (let end = 0; end < word.length; end++) {
      if (isPalindrome(swap(word, start, end))) {
        return [start, end];
      }
    }
  }

  return null;
}

getIndexsForPalindrome('anna'); // []
const result = getIndexsForPalindrome('abab'); // [0, 1]
console.log(result);
getIndexsForPalindrome('abac'); // null
