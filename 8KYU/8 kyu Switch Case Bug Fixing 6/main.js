// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value){
    console.log(value.operation)
    var result = 0;
    switch(value.operation){
      case'+': return result = value.a + value.b;
      case'-': return result = value.a - value.b;
      case'/': return result = value.a / value.b;
      case'*': return result = value.a * value.b;
      case'%': return result = value.a % value.b;
      case'^': return result = Math.pow(value.a, value.b);
    }
    return result;
  }

//   function evalObject(value){
//     var result = 0;
//     switch(value.operation){
//       case'+': result = value.a + value.b;
//         break;
//       case'-': result = value.a - value.b;
//         break;
//       case'/': result = value.a / value.b;
//         break;
//       case'*': result = value.a * value.b;
//         break;
//       case'%': result = value.a % value.b;
//         break;
//       case'^': result = Math.pow(value.a, value.b);
//         break;
//     }
//     return result;
//   }

// let ops = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '/': (a, b) => a / b,
//     '*': (a, b) => a * b,
//     '%': (a, b) => a % b,
//     '^': Math.pow,
//   }
  
//   let evalObject = o => ops[o.operation](o.a, o.b)