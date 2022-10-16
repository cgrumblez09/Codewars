// You are a(n) novice/average/experienced/professional/world-famous 
// Web Developer (choose one) who owns a(n) 
// simple/clean/slick/beautiful/complicated/professional/business 
// website (choose one or more) which contains form fields so visitors can
//  send emails or leave a comment on your website with ease. However, 
//  with ease comes danger. Every now and then, a hacker visits your website
//  and attempts to compromise it through the use of XSS 
//  (Cross Site Scripting). This is done by injecting script tags into the 
//  website through form fields which may contain malicious code 
//  (e.g. a redirection to a malicious website that steals 
//     personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D

// PREP
// We need to take a string and replace certain characters <>&""
// These are script tags
// We need to do this multiple times
// No other characters are included in the search

// We can use the .replace method and use a Regex / /g to search the string "globally"
// We can use multiple replace methods one after another to search and replace each character

function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
  }

//   function htmlspecialchars(formData) {
//     return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
//   }

//   function htmlspecialchars(formData) {
//     const dict = {
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         '&': '&amp;',
//     };
//     return formData.replace(/[<>"&]/g, char => dict[char]);
// }

// const htmlspecialchars = formData => formData.replace(/[<>"&]/g, m => ({"<": "&lt;", ">": "&gt;", "\"": "&quot;", "&": "&amp;"})[m]

// function htmlspecialchars(formData) {
//     // Insert your code here
//     let harmfulCharactersResult = '';
//     for (let i = 0; i < formData.length ; i++){
//       if (formData[i] === '<'){
//         harmfulCharactersResult += '&lt;'
//       } else if (formData[i] === '>'){
//         harmfulCharactersResult += '&gt;'
//       } else if (formData[i] === '"'){
//         harmfulCharactersResult += '&quot;'
//       } else if (formData[i] === '&'){
//         harmfulCharactersResult += '&amp;' 
//       } else {
//         harmfulCharactersResult += formData[i]
//       }
//     }
//     return harmfulCharactersResult;
//   }