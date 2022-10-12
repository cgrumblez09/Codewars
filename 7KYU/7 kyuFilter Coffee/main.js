// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

// PREP
// We need to see what coffee we can afford from what places
// Our two parameters need to be compared, less than or equal to
// Those values need to be taken from the array and added to an empty string
// The prices in the string are to be from lowest to highest
// All values are positive and assumed to be numbers

// We can use the filter method to compare the budget and price in the array
// The filter method makes a new array with the correct prices
// We then use the sort method to sort the array lowest to highest
// Then we use the join method with (',') so the array can be joined together into a string witha comma between each value

function search(budget, prices) {
    //   console.log(prices.filter(x => x <= budget).sort((a , b) => a - b).join(','))
    return prices.filter(x => x <= budget).sort((a , b) => a - b).join(',')
    }

// const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();

// function search(budget, prices) {
//     return prices.filter(function (elem) {
//         if (elem <= budget){
//             return true;
//             }
//     })
//     .sort((a,b) => a-b).toString()
// }

// function search(budget, prices) {
//     var arr = [];
//     prices.forEach(function(p){
//       if(p<=budget)
//         arr.push(p);
//     });
//     return arr.sort(function(a,b){ return a > b }).join();
//   }