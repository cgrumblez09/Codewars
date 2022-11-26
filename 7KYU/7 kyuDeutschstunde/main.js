// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

//     each noun containing less than 2 vowels has the article "das"
//     each noun containing 2/3 vowels has the article "die"
//     each noun containing more than 3 vowels has the article "der"

// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

// (This Kata is a joke, there is no such grammar rule!)

// function derDieDas(wort){
  
// }

// We have a string that includes vowels, no number or special characters
// We need to return the string with the proper german word, depeneding on the amount of vowels in the string
// We can make the vowels into an array
// Set up a variable to hold a count
// We can do a nested array to loop through both arrays and anytime there is a match we add 1 to the count
// Once the count is set we can use a conditional to check what the count is and return the proper word along with the original string

function derDieDas(wort){
    const vowel = ['a' , 'e' , 'i' , 'o' , 'u' , 'ä' , 'ö' , 'ü'];
    let count = 0;
    
    for(let i = 0; i < wort.length; i++){
      for(let j = 0; j < vowel.length; j++){
        if( wort[i].toLowerCase() == vowel[j].toLowerCase()){
          count++
        }
      }
    }
    if(count < 2){
      return `das ${wort}`
    }
    else if(count >= 2 && count <= 3){
      return `die ${wort}`
    }
    else{
      return `der ${wort}`
    }  
  }

//   function derDieDas(wort) {
//     var n = wort.split(/[aeiouäöü]/i).length - 1
//     if (n < 2) return "das " + wort
//     if (n > 3) return "der " + wort
//     return "die " + wort
//   }

//   function derDieDas(wort) {
//     var vowels = (wort.match(/([aeiouäöü])/ig) || []).length;
//     return (vowels < 2 ? "das" : (vowels > 3 ? "der" : "die")) + " " + wort;
//   } 

//   function derDieDas(wort){
//     var i = ~~((wort.match(/([aeiouäöü])/gi) || []).length / 2);
//     return ['das ', 'die ', 'der '][i < 2 ? i : 2] + wort;
//   }

//   const derDieDas = wort =>
//   (val => `${val < 2 ? `das` : val > 3 ? `der` : `die`} ${wort}`)
//   ((wort.match(/[aeiouäöü]/gi) || []).length);

//   const f = w => w.split('').filter(c=> 'aeiouäöü'.includes(c.toLowerCase())).length, derDieDas = w => `${['das', 'die', 'der'][ (f(w)>1) + (f(w)>3) ]} ${w}`