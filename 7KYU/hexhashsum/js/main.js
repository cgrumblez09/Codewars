// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113

const hexHash = (str) => 
str.length === 0 ? 0 : str.replace( /./g, x=> (x.codePointAt()).toString(16) ).match(/\d/g).reduce((a,b)=> +a + +b,0)

// const hexHash = code => code.split('')
//                             .map(c => c.charCodeAt().toString(16))
//                             .join('')
//                             .replace(/[^\d]/g,'')
//                             .split('')
//                             .reduce((acc, x) => acc + Number(x), 0);

// function hexHash(code){
//   return code.split('').map(c=>c.charCodeAt())
//     .map(n=>n.toString(16))
//     .join('')
//     .split('')
//     .filter(c=>'123456789'.includes(c))
//     .map(d=>parseInt(d))
//     .reduce((a, b)=>a+b, 0)

// const hexHash = code =>
//   [...code.replace(/./g, element => element.charCodeAt().toString(16))
//           .replace(/\D/g,'')].reduce((prev,curr) => prev + Number(curr),0)