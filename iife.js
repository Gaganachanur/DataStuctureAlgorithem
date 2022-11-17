/**IIFE (pronounced as iffee) means Immediately Invoked Function Expression.
 *  This is a function expression which is executed as soon as it is created.
 *  That means we don’t need to call it after creation, it will be executed by default. 
 * Its syntax is: */

 (function(){
    // some code
    console.log('peace')
    // some code
    }) ();

//with arrow function
    (()=>{
        console.log('ultra with arrow function')
    })
    ();

    /**Main use cases of IIFE:

We can use them if we want to restrict the scope of a variable to local and don’t want to populate the global environment.
When we use timer functions like setTimeout() in a for loop, then they may give us unexpected results. 
To solve such issues we enclosed the timer functions in IIFE. */

(()=>{
   for(let i =0; i<= 5;i++)
   setTimeout(()=>{console.log(`peace ${i}`)}, 5000)
}) ();

(()=>{
    let finish
for(var i=0; i<=4; i++)
 finish = setTimeout(()=>{console.log('ultra '+i)},3000)

 clearTimeout(finish,2000)
}) ();

/**An IIFE is a good way to secure the scope. 
 * You can use IIFEs to prevent global variables' definition issues, alias variables, protect private data, 
 * and avoid conflicts of using many libraries that export the same object name. */
(callfunc = (num)=>{
    var i = num
console.log(i+ ' iffe scope')
}) ()
callfunc(200)

//console.log(i) cant be used outside the iife scope so iffe is used
