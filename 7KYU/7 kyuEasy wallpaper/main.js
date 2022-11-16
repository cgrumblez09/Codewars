// John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

// Last time he did these calculations he got a headache, so could you help John?

// Task
// Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

// Example:
// wallpaper(4.0, 3.5, 3.0) should return "ten"

// wallpaper(0.0, 3.5, 3.0) should return "zero"

// Notes:
// all rolls (even with incomplete width) are put edge to edge

// 0 <= l, w, h (floating numbers); it can happens that w * h * l is zero

// the integer r (number of rolls) will always be less or equal to 20

// FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)

// In Javascript and Python English numbers are preloaded and can be accessed as:

// numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
// For other languages it is not preloaded but you can use the above one if you need it.

//

function toWord(n) {
    var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", 
                 "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", 
                 "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    return words[n];
  }
  
  function wallpaper(l, w, h) {
    if ([l,w,h].indexOf(0) >= 0) {
      return "zero";
    } else {
      var roll = 5.2;
      var buffer = 1.15;;
      var need = (l*h)*2 + (w*h)*2;
      return toWord(Math.ceil(need/roll * buffer));
    }
  }

//   const wallpaper = (l, w, h) =>
//   [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`, `twenty`]
//     [l && w ? Math.ceil(2 * (l + w) * h / 5.2 * 1.15) : 0];

//  function wallpaper (length, width, height) {
//         if (length === 0 || width === 0) return 'zero'
      
//         const roomArea = 2 * (length + width) * height
//         const rollArea = 0.52 * 10
      
//         const rollsRequired = Math.ceil(roomArea / rollArea * 1.15)
//         return numbers[rollsRequired]
//       }

//       function wallpaper(l, w, h) {
//         var numbers = ['zero', 'one', 'two', 'three', 'four', 'five',
//                         'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                         'twelve', 'thirteen', 'fourteen', 'fifteen',
//                         'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
//         return w * h * l === 0 ? numbers[0] : numbers[Math.ceil((l * h * 2 + w * h * 2) * 1.15 / 5.2)];
//     }