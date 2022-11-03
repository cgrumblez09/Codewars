// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

// PREP
// We need to compare both arrays a and b
// The comparison is to see if each index in array1 squared (power of 2) has an equal index in array2
// null is a a possibilty for array1 or array2
// If all the index in array1 squared = array2 we return true
// If one of the values in array2 is not the value of any array1 square then we return false
// We can start by addressing array1 or array2 == null to return false
// We can then sort array1 and map it to the power of 2
// Then sort array2
// We then compare the sorted arrays to each other with JSON.stringify()
// Return true if true, else false

function comp(array1, array2){
    if(array1 == null || array2 == null){
      return false
    }
    let sort1 = array1.sort((a , b) => a - b).map(x => Math.pow(x, 2))
    let sort2 = array2.sort((x , y) => x - y)
    if(JSON.stringify(sort1) == JSON.stringify(sort2)){
      return true
    }
    else{
      return false
    }
  }

//   function comp(array1, array2) {
//     if (array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b);
//     array2.sort((a, b) => a - b);
//     return array1.every((item, index) => item * item == array2[index]);
//   }

//   function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
//   }

//   function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
//   }

//   const comp = (array1, array2) => 
//   Array.isArray(array1) &&
//   Array.isArray(array2) &&
//   array1.every(item => {
//     const index = array2.indexOf(Math.pow(item, 2))
//     return index > -1 ? array2.splice(index, 1) : false
//   })

//   function comp(a, b) {
//     if (!a || !b || a.length !== b.length) return false;
//     return a.map(x => x * x).sort().toString() === b.sort().toString();
// }