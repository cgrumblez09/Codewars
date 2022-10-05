// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
    console.log(n)
    let arr = [1];
    if(n === 0){return '0.00'}

    for(let i = 1, k = 0; i < n; i++ , k++){      
      if(n == 1){return '1.00'}

      arr.push((1/(4 + (k * 3))))

      }
  //   console.log(arr)
    let res = arr.reduce((a, b) => a + b)
  //   console.log(res.toFixed(2))
    return res.toFixed(2)
}


// function SeriesSum(n) {
//     var sum = 0;
//     for(var i = 0; i < n; i++) {
//       sum += 1 / (3 * i + 1);
//     }
//     return sum.toFixed(2);
//   }

//   function SeriesSum(n) {
//     for (var s = 0, i = 0; i < n; i++) {
//       s += 1 / (1 + i * 3)
//     }
    
//     return s.toFixed(2)
//   }

// function SeriesSum(n, s = 0) {
//     return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }

// function SeriesSum(n) {
//     return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
//   }