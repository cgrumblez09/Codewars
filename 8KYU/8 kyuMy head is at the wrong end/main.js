// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// PREP
// The kata wants us to inspect and rearrage the parameter that is an array
// The array looks to be in the incorrect order. At a glance it looks like the orders are reversed
// If they are not out of order, we can simply reverse the array
// It is not asking to leave the original arr intact
// It does not look like numbers/null/undefined/empty strings will be part of the array

function fixTheMeerkat(arr) {
    return arr.reverse()
  }

// const fixTheMeerkat = arr => arr.reverse()

// const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

// function fixTheMeerkat(arr) {
//     return [arr[2], arr[1], arr[0]];
//   }

