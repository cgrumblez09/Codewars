// Reverse every other word in a given string, then return the string. 
// Throw away any leading or trailing whitespace, while ensuring there 
// is exactly one space between each word. Punctuation marks should be 
// treated as if they are a part of the word in this kata.

// PREP
// Sounds straight forward according to the task
// Take every other string and reverse it
// This means I need to isolate the strings first and then target every other
// We need to reverse the string and insert it back into the original string
// We then return the string with the reversed strings

// First we need to split the string into an array
// We then loop through the array and target odd number indexes
// We can do that by finding the modulous of the index that is not 0 (i % 2!= 0)
// We then target the index with newStr[i] and make it the reversed value
// We then exit the loop and join/trim the string and return its value

function reverse(str){
    //   console.log(str.split(' '))
      let newStr = str.split(' ')
      for(let i = 0; i < newStr.length; i++){
        if(i % 2 != 0){
    //       console.log(newStr[i].split('').reverse().join(''))
          newStr[i] = newStr[i].split('').reverse().join('')
        }
      }
      return newStr.join(' ').trim()
    }

    // function reverseWord(str) {
    //     return str.split("").reverse().join("");
    //   }
      
    //   function reverse(str) {
    //     return str
    //       .trim()
    //       .split(/\s+/)
    //       .map((s, i) => (i % 2 === 1 ? reverseWord(s) : s))
    //       .join(" ");
    //   }

    // function reverse(string) {
    //     return string
    //       .split` `
    //       .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
    //       .join` `
    //       .trim();
    //   }
    //   function reverse(str){
    //     return str.split(` `).map((it, index) => {
    //       return index%2 !== 0 ? it.split(``).reverse().join(``) : it
    //     }).join(` `).trim();
    //   }

    //   const reverse =s=> s.replace( /(\S+ )(\S+)/g, (_,a,b)=>a+[...b].reverse().join('') ).trim()