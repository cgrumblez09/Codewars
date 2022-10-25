// You are the judge at a competitive eating competition and you need to choose a winner!

// There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

// Chickenwings: 5 points

// Hamburgers: 3 points

// Hotdogs: 2 points

// Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

// [
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ]
// It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

// [
//   {name: "Big Bob", score: 134},
//   {name: "Habanero Hillary", score: 98}
// ]
// Happy judging!

// PREP
// This is a function, not a class or object literal
// whoAteWhat is passing in an array
// We need to treat this as a function, no this. notation needed
// We can make a new array with the values of each object accessing each value with the .notation
// We can forEach or map
// We can map it out to another object with literal notation
// We can then sort the total values from the calculation in highest to lowest


function scoreboard(whoAteWhat){
    return whoAteWhat.map(obj => ({
      name: obj.name,
      score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
    })).sort((a, b) => b.score - a.score || a.name > b.name);
  }

//   const scoreboard = whoAteWhat =>
//   whoAteWhat.map(val => ({name: val.name, score: val.chickenwings * 5 + val.hamburgers * 3 + val.hotdogs * 2}))
//     .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

//     function scoreboard(whoAteWhat){
//         // your code here..
//         let res = []
        
//         whoAteWhat.forEach(obj => {
//           res.push({
//             name: obj.name,
//             score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2
//           })
//         })
        
//         console.log(res)
//         res.sort((a,b)=> a.name > b.name)
//         console.log(res)
//         res.sort((a,b)=> b.score - a.score)
//         console.log(res)
//         return res
//       }

