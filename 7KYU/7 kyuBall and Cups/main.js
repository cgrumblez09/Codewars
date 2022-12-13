// Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

// Rules:

// There will only ever be three cups.
// Only two cups will be swapped at a time.
// The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
// Arr will be an array of integers 1 - 3 organised in pairs.
// There won't be any empty sub-arrays.
// If arr is just an empty array b should be returned.
// Examples:

// (b) = 2, (arr) = [[1,2]]

// The ball is under cup number : 1

// (b) = 1, (arr) = [[2,3],[1,2],[1,2]]

// The ball is under cup number : 1

// (b) = 2, (arr) = [[1,3],[1,2],[2,1],[2,3]]

// The ball is under cup number : 3

// function cupAndBalls(b, arr){

// };

// We start with b, the ball position and an array with two numbers
// If the number 'b' is in the array we swap the number with the other in the same array
// Continue this until the end of the arrays
// We can loop through the array and compare the value of 'b' and see if it is in the array
// If it is, then we swap the position b is in with the other index
// We then return the value 'b' when the arrays end


function cupAndBalls(b, arr){
    //   console.log(b , arr)
      if(arr == []){
        return b
      }
      for(let i = 0; i < arr.length; ++i){
            if(b == arr[i][0]){
              b = arr[i][1];
            }
            else if(b == arr[i][1]){
              b = arr[i][0];
          }
      }
      console.log(b)
      return b
    };

// function cupAndBalls(cup, switches){
//     for(let [sleight, hand] of switches) {
//       if(sleight == cup) {
//         cup = hand;
//       }
//       else if(hand == cup) {
//         cup = sleight;
//       }
//     }
//     return cup;
//   }

// function cupAndBalls(b, arr){
//     for (var i=0; i<arr.length; ++i)
//       if (arr[i][0]==b)
//         b=arr[i][1];
//       else if (arr[i][1]==b)
//         b=arr[i][0];
//     return b
//   };

//   const cupAndBalls = (ball, pairs) => 
//   pairs.reduce((ball, [a, b]) => 
//   a == ball? b: b == ball? a: ball, ball);

//   function cupAndBalls(b, arr){
//     var temp = b;
    
//     for (var i = 0; i < arr.length; i++) {
//       if (b == arr[i][0]) temp = arr[i][1];
//       if (b == arr[i][1]) temp = arr[i][0];
//       b = temp;
//     }
//     return b
//   };

//   function cupAndBalls(ballPosition, swaps) {
//     for (const swap of swaps) {
//       if (swap.includes(ballPosition)) {
//         ballPosition = swap[0] === ballPosition ? swap[1] : swap [0];
//       }
//     }
    
//     return ballPosition;
//   }