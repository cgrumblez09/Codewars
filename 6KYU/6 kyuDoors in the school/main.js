// In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one.

// When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

// You need to count how many doors are left opened after all the students have come.

// Example:



// Here you can see red squares – closed doors, green – opened ones.

// Input:

// n – the number of doors and students, n ∈ N, n ∈ [1, 100000]

// Output:

// o – the number of opened doors, o ∈ N

// doors(5)
// Should return

// 2


function doors(n){
    let doors = new Array(n).fill('c');
    for ( let x = 1 ; x < n + 1 ; x++){
       doors = openAndShut(doors, x);    
    } 
    return doors.reduce(function(total,x){ return x == 'o' ? total+1 : total}, 0)
  }
//   function openAndShut(arr, num) {
//     let doors = arr;
//     for (let i = num -1 ; i < arr.length + 1 ; i = i + num) {
//       if(doors[i] === 'c') {
//         doors[i] = 'o';
//       }else if(doors[i] === 'o') {
//         doors[i] = 'c'; 
//         }
//   }
//   return doors;
//   }

//   function doors(n){
//     var pupil = 1;
//     var doors = new Array(n)
//     while(pupil <= n) {
//       for(var i=pupil; i <= n; i++){
//         if((i % pupil) === 0){
//           doors[i-1] = !doors[i-1]
//         }
//       }
//       pupil++
//     }
//     return doors.filter((el) => el).length;
//   }

//   function doors(n){  
//     var z = new Array(n);
//     for(var i = 1; i<=n; i++){
//     for(var j = i-1; j<n; j+= i){
    
//     z[j] = !z[j];
      
//     }
//   }
//   return z.reduce((a, b) => a + b);
//   }

// // function doors(n){
// //     return ~~Math.sqrt(n)
// //   }

// //   const doors = n => Math.sqrt(n) | 0

// // doors=(n)=>Math.floor(Math.sqrt(n))
