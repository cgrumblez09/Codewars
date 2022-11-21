// Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

// their digits occur only once

// they are odd

// they are multiple of three

// nextNumb(12) == 15

// nextNumb(13) == 15

// nextNumb(99) == 105

// nextNumb(999999) == 1023459

// nextNumber(9999999999) == "There is no possible number that
// fulfills those requirements"




function nextNumb(val) { 
    while (val < 9876543210) {
      val++;
      if(val%2 && !(val%3) && val.toString().match(/^(?!.*(.).*\1)\d{1,10}$/)) {
        return val;
      }
    }
    return 'There is no possible number that fulfills those requirements';
  }

//   function nextNumb(val) {
//     if (val >= 9999999999) return "There is no possible number that fulfills those requirements";
//     let num = val;
//     let arrayOfDigits = `${num}`.split("");
//     let checkUnique = [...new Set(arrayOfDigits)];
//     for (let i = val; i < val * 1.5; i++) {
//         num = num + 1;
//         arrayOfDigits = `${num}`.split("");
//         checkUnique = [...new Set(arrayOfDigits)];
//         if (Number.isInteger(num / 3) && !Number.isInteger(num / 2) && checkUnique.length === arrayOfDigits.length) {
//             break;
//         }
//     }
//     return num;
// }

// function nextNumb(n) { 
//     n+=3-n%3;
//     n+=n&1?0:3;
//     for(;n<9999999999;n+=6){
//         let s = ''+n;
//         if(new Set([...s]).size==s.length) return n;
//     }
//     return "There is no possible number that fulfills those requirements";
// }