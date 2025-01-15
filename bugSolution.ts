function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

// Alternative solution using a type guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); // Works correctly
let result2 = addSafe(1,2); //Works correctly

//This will throw errors
try {
  let result3 = add(1, "2");
} catch (error) {
  console.error(error);
}

try{
  let result4 = addSafe(1, "2");
} catch (error) {
  console.error(error);
}
