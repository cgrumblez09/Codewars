// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]
// ALGORITHMSFUNDAMENTALS

// We start with a parameter (n) which is a number, assumed to be whole and positive and not less than 1
// We are to return an array from 1 up to the (n) parameter
// If the number is a multiple of 3, return 'Fizz'
// If multiple of 5, return 'Buzz'
// If multiple of 3 and 5, 'FizzBuzz'

function fizzbuzz(n){
    let arr = []
    for(let i = 1; i <= n; i++){
      if(i % 3 == 0 && i % 5 == 0){
        arr.push('FizzBuzz')
      }
      else if(i % 3 == 0){
        arr.push('Fizz')
      }
      else if(i % 5 == 0){
        arr.push('Buzz')
      }
      else{
        arr.push(i)
      }
    }
    console.log(arr)
    return arr
  }

//   function fizzbuzz(n)
//   {
//     var i = 1, arr = [];
//     while(i <= n) {
//       var fizz = (i % 3 == 0);
//       var buzz = (i % 5 == 0);
//       if(fizz || buzz) {
//         arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
//       }
//       else {
//         arr.push(i);
//       }
//       i++;
//     }
//     return arr;
//   }
  
//   var fizzify = fizzbuzz;

//   var fizzify = fizzbuzz = function(n)
// {
//   return Array.apply(null, new Array(n)).map(function(e, i){
//     return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
//   }); 
// }

// function fizzbuzz(n) {
//     var fizzified = [];
//     for (var i = 1; i <= n; i++) {
//       var val = '';
//       if (i % 3 == 0) val += 'Fizz';
//       if (i % 5 == 0) val += 'Buzz';
//       fizzified.push(val || i);
//     }
//     return fizzified;
//   }
  
//   function fizzify(n) {
//     return fizzbuzz(n);
//   }

//   function fizzbuzz(n)
//   {
//     let arr = [];
//     for (let i = n; i > 0; i--) {
//       i%3 === 0 && i%5 === 0 ? arr.unshift('FizzBuzz') :
//       i%3 === 0 ? arr.unshift('Fizz') :
//       i%5 === 0 ? arr.unshift('Buzz') : arr.unshift(i);
//     }
//     return arr;
//   }

// const fizzbuzz = n => Array(n).fill(1).map((x,y)=>x+y).
// map(n=>(n%3?'':'Fizz')+(n%5?'':'Buzz')||n);