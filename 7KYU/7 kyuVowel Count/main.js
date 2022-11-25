// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
  
//     return 0;
//   }

// describe("Vowels Count Tests",function(){
//     it("should return 5 for 'abracadabra'",function(){
//       assert.strictEqual(getCount("abracadabra"), 5) ;
//     });
//   });

// We have a string that needs to be split and count how many vowels are in the string
// We return a number as the count
// We can set up a variable that stores the vowels in an array
// We can then loop through both arrays, nested arrays to compare each index of each array
// When a match is made, we add 1 to the count of 0

function getCount(str) {
    let count = 0;
    const vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
    for(let i = 0; i < str.split('').length; i++){
      for(let j = 0; j < vowels.length; j++){
        if(str[i] == vowels[j]){
          count++
        }
      }
    }
    console.log(count)
    return count;
  }

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }

// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
//   }
  
// function getCount(str) {
//     var vowelsCount = 0;
//     str.split("").forEach(function(x){
//       if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//         vowelsCount += 1;
//       }
//     });  
//     return vowelsCount;
//   }
