// Puzzle
// If you don't know who Waldo is, he's a nice guy who likes to be in crowded places. But he's also a bit odd as he always likes to hide in plain sight. Can you spot Waldo in the crowd?

// Task
// Given crowd, an array of strings of equal length, representing a crowded place, return an array with two integers representing the coordinates [y, x] where Waldo can be found ([0, 0] is top-left, y being the row and x being the column ).

// Examples
// We've spotted Waldo a couple of times in the past. Below is what we found out. Note that he's been in much more crowded places lately.

// #1 Waldo at the beach
// "             "          Air
// "         w   "           Air with a bird
// "   w         "           Air with a bird
// "~~~~~~~~~~~~~"           Sea
// ".~..~~.~~~..~"           Waves on beach
// "...P......P.."           Beach with some people
// "......P..P..."           Beach with some people
// "..PW........."           Beach with Waldo and presumably a friend next to him

// Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit

// #2 Waldo visiting the Great Pyramid
// "                              "          Air
// "                              "           Air
// "            _                 "           Top of pyramid
// "          _____               "           Layer of pyramid
// "        _________             "           Layer of pyramid
// "  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo

// Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

// Hints
// - he isn't always wearing his usual clothes

// - why is there more than one bird in the first example ...

// function findWaldo(crowd) {
//     // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)
//     const y = 0, x = 0;
//     return [y, x];
//   }

//

function findWaldo(crowd){
    let count = new Map();
    for (let y = 0; y < crowd.length; y++) {
      for (let x = 0; x < crowd[y].length; x++) {
        count.set(crowd[y][x], (count.get(crowd[y][x]) || 0) + 1)
      }
    }
    for (let y = 0; y < crowd.length; y++) {
      for (let x = 0; x < crowd[y].length; x++) {
        if (count.get(crowd[y][x]) == 1) {
          return [y, x];
        }
      }
    }
  }

//   function findWaldo(crowd) {
//     const s=crowd.join(''), choices=new Set([...s])
//     const waldo = [...choices].filter(c=>s.replace(new RegExp(c,'g'),'').length==s.length-1)[0]
//     const y=crowd.findIndex(r=>r.includes(waldo))
//     return [y, crowd[y].indexOf(waldo)]
//   }
  
//   function whichWaldo(crowd) {
  
//     const ppl = crowd
//       .join('')
//       .match(/[a-z]/gi)
//       .reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
    
//     for (let char in ppl)
//       if (ppl[char] === 1)
//         return char;
    
//   }
  
//   function findWaldo(crowd) {
  
//     const len = crowd[0].length;
  
//     const pos = crowd
//       .join('')
//       .indexOf(whichWaldo(crowd));
    
//     return [ Math.floor(pos / len), pos % len ];
  
//   }

//   function findWaldo(crowd) {
//     let obj = {};
//     crowd.forEach(line=> {
//       line.split('').forEach(char=> obj[char] ? obj[char]+=1 : obj[char] = 1)
//     })
//     let waldo = Object.entries(obj).sort((a, b)=> a[1] - b[1])[0][0];
//     let coord;
//     crowd.find((line, y)=>{
//       const x = line.indexOf(waldo)
//       if (x > -1) coord = [y, x]
//     })
//     return coord;
//   }

//   function findWaldo(crowd) {
//     // The only way to be sure who Waldo is, is to make him unique.
//     // The example tests and hints should push you in this direction.
//     let h = crowd.length, w = crowd[0].length, freq = {};
//     for (let y = 0; y < h; y++)
//       for (let x = 0; x < w; x++)
//         freq[crowd[y][x]] = (freq[crowd[y][x]] || 0) + 1;
//     for (let token in freq)
//       if (freq[token] == 1)
//         for (let y = 0; y < h; y++)
//           for (let x = 0; x < w; x++)
//             if (crowd[y][x] == token)
//               return [y, x];
//   }