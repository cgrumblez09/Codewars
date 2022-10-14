// Reverse every other word in a given string, then return the string. 
// Throw away any leading or trailing whitespace, while ensuring there 
// is exactly one space between each word. Punctuation marks should be 
// treated as if they are a part of the word in this kata.

// PREP
// 

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