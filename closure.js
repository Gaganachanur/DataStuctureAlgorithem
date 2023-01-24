/*With the help of closure we can make a global variable => local or private. 
In other words you can say that closures are the ability of a 
function to remember the variables (or functions) declared in the outer scope.*/

function closureExample() {
    var count = 1; 
    function checkValue() { 
      console.log(count);
    }
    count++;
    return checkValue;
  }
  console.log( closureExample());
  var counter = closureExample();
  counter(); // result will be 2
//value of outer variable count is available to the inner function checkValue() even after the execution of outer function.

  function peace(){

    function ultra(){
       return bob = 10
    }
    return ultra
  }

  let peaceIsTheMission = peace();
  console.log(peaceIsTheMission());

  function closure(){
    let a =0;

    function ultra2(){
      console.log(a)
    }

    a++;
    return ultra2;
  }

  let ultramax = closure();
 ultramax()

  