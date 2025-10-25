// Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scope with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
// You will see output for blockVar, because it can be accessed outside
// the curly brackets {}. But you will see ReferenceError for blockLet
// because it cannot be accessed outside the curly brackets due to which
// it is known as block scoped variables. Such variables can only be accessed 
// within curly brackets. You will see the same error for const as well.
// Note: A ReferenceError occurs when code attempts to use a variable that 
// has not been declared or is outside of its scope, preventing proper access or execution.

function show() {
    var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

//We will see ReferenceError for functionVar because
//it cannot be accessed outside the function making it a 
//function scoped variable. Similarly, you will not be able
//to access let and const because they are block scoped variables.

// Note: You will only see an error for functionVar because it acts as
// a blockage, preventing the execution of the subsequent lines of code