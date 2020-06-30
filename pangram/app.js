// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
  var lowerCased = sentence.toLowerCase();
  var alphabets = 'abcdefghijklmnopqrstuvwxyz';
  for (let char of alphabets) {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}

//another way:
// function isPangram(string) {
//   var array = string.toLowerCase().split('');
//   var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   for (let i = 0; i < alphabets.length; i++) {
//     if (array.indexOf(alphabets[i]) === -1) {
//       return false;
//     };
//   }
//   return true;
// }




console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));