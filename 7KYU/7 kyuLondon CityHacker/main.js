// You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

// For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

// function londonCityHacker(journey) {
//     //code me up baby!
//   }

// We have an array of numbers and strings.
// String cost 2.4 and numbers 1.5
// If the array has two consecutive numbers, it cost 1.5 not 3
// Add the sum of the array for a total cost of travel
// Start with a variable set to 0
// Loop through the array and identify typeof is string or number
// string adds 2.4, else 1.5
// Then if the current index (i) is a number and the next i is number, i++ to SKIP the next index

function londonCityHacker(journey) {
    let sum = 0;
    
    for (let i = 0; i < journey.length; i++) {
      if (typeof journey[i] === "string") sum += 2.40;
      else {
        sum += 1.50;
        if (typeof journey[i + 1] === "number") i++;
      }  
    }
    
    return `£${sum.toFixed(2)}`;
  }

//   function londonCityHacker(trip) {
//     let typeList = trip.map(journey => typeof journey);
//     console.log(typeList);
    
//     let fare = 0;
//     let busCount = 0;
//     for(type of typeList) {
//       if(type === 'string') {
//         fare += 2.40;
//         busCount = 0;
//       } else if(type === 'number' && busCount === 0) {
//         fare += 1.50;
//         busCount++;
//       } else {
//         busCount = 0;
//       }
//       console.log(type);
//       console.log(fare);
//     }
//     return('£' + fare.toFixed(2));
//   }

//   function londonCityHacker(journey) { console.log(journey)
//     let busFare = 0;
//     return `£${ journey.map( (v,i) => isNaN(v) ? ( busFare=0, 2.4 ) : busFare=1.5-busFare ).reduce( (v,w) => v+w , 0 ).toFixed(2) }`;
//   }

//   function londonCityHacker(list) {
//     const mapFunc = i => i == 't' ? 2.4 : 1.5
//     return '£' + list.map(i => isNaN(i) ? 't' : 'b')
//                          .join``
//                          .replace(/bb/g, 'b')
//                          .split``
//                          .map(mapFunc)
//                          .reduce((sum, i) => sum + i, 0)
//                          .toFixed`2`
//   }

//   function londonCityHacker(journey, cost=0, out=0) {
//     for (let i of journey){
//       if(typeof i === 'string'){
//         out += 2.40
//         cost = 0
//       }else{
//         if (cost > 0){
//           cost = 0
//         }else{
//           out += 1.50
//           cost += 1
//         }
//       }
//     }
//     return `£${out.toFixed(2)}`
//   }

