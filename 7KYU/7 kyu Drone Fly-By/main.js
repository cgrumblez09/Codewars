// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

// FUNDAMENTALSSTRINGSARRAYS .fill()

function flyBy(lamps, drone){
    return lamps.split('').fill('o' , 0 , drone.length).join('')
  }

// The lamps parameter needs to be split into and array with either .split() or ... spread operator. The fill() method takes the first parameter 'o' and will start (second parameter) to fill the array and end (third param) the length of drone.length. Must join() the array to change the array into a string

//   const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``)

// function flyBy(lamps, drone){
//     if(drone.length > lamps.length) return 'o'.repeat(lamps.length)
//     return lamps.replace('x'.repeat(drone.length), 'o'.repeat(drone.length))
//   }

// function flyBy(lamps, drone){
//     return lamps.split('')
//                 .map((item,index, arr) => index < drone.length ? 'o' : item)
//                 .join('')
//   }
