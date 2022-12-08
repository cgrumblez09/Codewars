// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

// function hasSurvived(attackers, defenders){
//     // magic here
//   }



function hasSurvived(attackers, defenders) {
    let attack = 0;
    let defend = 0;
    let attackSum = 0;
    let defendSum = 0;
    let i = 0;
    while (attackers[i] || defenders[i]) {
      if (!attackers[i] || attackers[i] < defenders[i]) {
        defend++;
      } else if (!defenders[i] || attackers[i] > defenders[i]) {
        attack++;
      }
      if (attackers[i]) {
        attackSum += attackers[i];
      }
      if (defenders[i]) {
        defendSum += defenders[i];
      }
      i++;
    }
    return defend === attack ? attackSum <= defendSum : defend > attack;
  }

//   function hasSurvived(a, d){
//     const aStart = a.reduce((val, acc) => acc + val, 0);
//     const dStart = d.reduce((val, acc) => acc + val, 0);
  
//     let dAfterFight = d.filter((el, idx) => 0 < el - a[idx]).length;
//     let aAfterFight = a.filter((el, idx) => 0 < el - d[idx]).length;
    
//     if (dAfterFight > aAfterFight)    return true;
//     if (dAfterFight === aAfterFight)  return dStart >= aStart;
//     return false;
//   }

//   function hasSurvived(attackers, defenders){
//     let lengAttackers = attackers.length
//     let lengDefenders = defenders.length
    
//     if(lengAttackers === 0) {
//       return true
//     }
//     if(lengDefenders === 0) {
//       return false
//     }
    
//     const maxLeng = Math.max(lengAttackers, lengDefenders)
    
//     let survAttackers = 0;
//     let survDefenerds = 0;
    
//     for(let i = 0; i < maxLeng; i++){
//       if(attackers[i] && defenders[i])  {
//         if(attackers[i] !== defenders[i])  {
//           attackers[i] > defenders[i] ? survAttackers++ : survDefenerds++
//         }
//       }
      
//       else {
//         if(attackers[i]) {
//           survAttackers++
//         }
//         else {
//           survDefenerds++
//         }
//       }
//     }
    
//   //    console.log('survAttackers', survAttackers, attackers)
//   //    console.log('survDefenerds', survDefenerds, defenders)
    
//     if(survAttackers === survDefenerds) {
//       const sumAttackers = attackers.reduce((acc, cur) => acc +=cur)
//       const sumDefenders = defenders.reduce((acc, cur) => acc +=cur)
//       console.log('sumAttackers', sumAttackers)
//       console.log('sumDefenders', sumDefenders)
//       if(sumAttackers === sumDefenders) {
//         return true
//       }
//       else {
//         return  sumAttackers > sumDefenders ? false : true
//       }
//     }
    
//     return survAttackers > survDefenerds ? false : true
    
    
    
//   }

//   function hasSurvived(attackers, defenders){
//     let countA = 0,
//         countD = 0
//     for (let i = 0; i < attackers.length || i < defenders.length; i++) {
//       if (attackers[i] > defenders[i] || defenders[i] == undefined) {
//         countA++
//       } else if (defenders[i] > attackers[i] || attackers[i] == undefined) {
//         countD++
//       }
//     }
//     if (countA == countD) {
//       let sumA = attackers.reduce((acc,curr) => acc + curr, 0),
//           sumD = defenders.reduce((acc,curr) => acc + curr, 0)
//       if (sumA > sumD) {
//         return false
//       }
//       return true
//     }
//     return countD > countA
//   }