// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and 
// bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, 
// as is often the case, return 'Fail!'.

function well(x) {
  let res = []
  res = x.filter(el => el == 'good')
    if (res.length > 2) {
    return 'I smell a series!'
  } else if (res.length > 0 && res.length <= 2) {
    return 'Publish!'
  } else if (res.length < 1) {
    return 'Fail!'
  } 
}

// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' : 
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }

// function well(x) {
//   const count = x.reduce((s, v) => s + (v == 'good'), 0);
//   return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
// }

// const  well = x => {
//   let count = x.filter(el => el == 'good').length
//   return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
// }