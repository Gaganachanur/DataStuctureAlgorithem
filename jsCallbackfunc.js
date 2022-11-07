function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  
  initiate();

setTimeout(() => { console.log('1'); }, 0); 
console.log('2'); 
setTimeout(() => { console.log('5'); }, 100); 
Promise.resolve().then(() => { console.log('4'); });

for(var j = 0; j <=2; j++)
{ 
setTimeout(()=>{ console.log(j); },100) 
}
/**This is because in the case of var, the complete loop runs 3 times before setTimeout() calls the callback.
 *  So when setTimeout() runs the callback it gets the value of i=3 every time because var has the scope all over the function. 
 * Hence it prints the value 3, three times. */

for(let j = 0; j <=2; j++)
{ 
setTimeout(()=>{ console.log(j); },100) 
}

/**But in case of This is also a reason why let, every time there will be a new value of let and const were introduced in ES6. 
 * Before ES6, such tasks were resolved with the help of let due to its block scope. 
 * Hence it prints the output as 0,1,2. Closures. */
