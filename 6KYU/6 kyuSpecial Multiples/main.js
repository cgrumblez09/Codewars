// Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

// Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

// Let's see some cases:

// count_specMult(3, 200)  =>  6 

// The first 3 primes are: 2, 3 and 5.

// And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.
// Happy coding!!

function countSpecMult(n, mxval) {
    var  next = 1,  primes = [2], product = 2;
    while (primes.length < n) {
      next += 2;  
      if (!primes.every(p => next % p))
        continue;  
      primes.push(next);
      product *= next; 
    }
    return mxval / product | 0;
  }


//   var primes=[2,3,5,7,11,13,17,19,23];
//   var countSpecMult=(n,m)=>(m/primes.slice(0,n).reduce((p,c)=>p*c,1))|0;

// function countSpecMult(n, mxval) {
//     // your code
//     let multiply = 1;
//     for (let i = 2, primeNumberCount = 0; primeNumberCount < n; i++) {
//         if(isPrime(i)) {
//             primeNumberCount++; 
//             multiply *= i;
//         }
//     }

//     return Math.floor(mxval / multiply);
// } 

// let isPrime = num => {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return true;
// }

// const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]

// function countSpecMult(n, mxval) {
//   const prod = prime.slice(0, n).reduce((a, b) => a * b, 1)
//   return ~~(mxval / prod)
// }

// function countSpecMult(n, mxval) {
//     var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
//     for (var i = 0, x = 1; i < n; i++) {x *= primes[i];} 
//     return Math.floor(mxval/x);
//   }