// i is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.

// Your Task
// Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).

// function pofi(n){
//     return 'i';
//   }

// We start with a parameter n, which is a non neg number
// We are to return one of 4 answers, 1 i -1 and -i as a string
// This is not a math problem, but a conditional problem
// We can store the results 1 through i into an array 
// We can then use another array and return the modulous of the n parameter by 4 [n%4]
// This will take the parameters remainder and find it in the array and return that value

// function pofi(n){
//   }

function pofi(n){
    return ['1' , 'i' , '-1' , '-i'][n % 4]
  }

//   function pofi(n){
//     switch (n%4) {
//       case 0: return '1'
//       case 1: return 'i'
//       case 2: return '-1'
//       case 3: return '-i'
//     }
//   }

//   pofi=n=>(n&2?'-':'')+'1i'[n&1]