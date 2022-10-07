// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// PREP
// I believe I need to split this string into an array and loop through it
// Need to make an empty array to push the results to
// Inside the loop I need a conditional to check the values of each index I will loop through
// After checking each index and pushing to the empty array I then return the array and join it back

function DNAStrand(dna){
    let arr = dna.split('')
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'A'){
        newArr.push('T')
      }
      else if(arr[i] == 'T'){
        newArr.push('A')
      }
      else if(arr[i] == 'G'){
        newArr.push('C')
      }
      else if(arr[i] == 'C'){
        newArr.push('G')
      }
    }
    return newArr.join('')
}

// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// let pairs = {A:'T',T:'A',C:'G',G:'C'};
// const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

// function DNAStrand(dna){
//     var table = {
//       C : 'G',
//       G : 'C',
//       A : 'T',
//       T : 'A'
//     };
      
//     return dna.split('').map(function(cv) {
//       return table[cv]; 
//     }).join('');
//   }