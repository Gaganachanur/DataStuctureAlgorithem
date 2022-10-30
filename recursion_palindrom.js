//string palindrome using recursive method
function palindrome(word) {
    if(word.length==0||word.length==1)
        return true;

    if(word[0]!=word[word.length-1]) {
        return false;
    }

    return palindrome(word.slice(1,word.length-1));

}

console.log(`palindrome("rotor"):${palindrome("rotor")}`);
console.log(`palindrome("lol"):${palindrome("lol")}`);
console.log(`palindrome("malayalam"):${palindrome("malayalam")}`);
console.log(`palindrome(gagan):${palindrome("gagan")}`);

//factorial using recursive method
function number(n)
{
    if(n==0)
        return 1;

    return n*number(n-1);
}
console.log(`number(5):${number(5)}`)

//number palindrome using recursive method
function num_palindrome(n)
{
    if(n[0]==0||n[n.length-1]==1)
        return true;

    if(n[0] !=n[n.length-1])
        return false;

    return num_palindrome(n.slice(1,n[n.length-1]))
}

console.log(num_palindrome("101"))

//string palindrome using recursive method
function palindrome(word) {
    if(word.length == 0 || word.length == 1)
        return true;

    if(word[0] != word[word.length-1]) { // fails for the palindrome condition
        return false;
    }

    return palindrome(word.slice(1, word.length-1));
}

console.log(`palindrome(rotor) : ${palindrome("rotor")}`);
console.log(`palindrome(rator) : ${palindrome("rator")}`);
console.log(`palindrome(r) : ${palindrome("r")}`);
console.log(`palindrome() : ${palindrome("")}`);
console.log(`palindrome(roor) : ${palindrome("roor")}`);

//string reverse using  recursive method

function strev(str)
{
    if(str.length==0)
        return "";

    return str[str.length-1]+strev(str.substring(0,str.length-1))
}
console.log(strev("My name is Khan"))

function fibonacci(n) {
    if(n <= 1)
        return n;

    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6 ))


//staircase problem
function noOfWays(n) {
    if(n == 1 || n == 0)
        return 1;

    if(n == 2)
        return 2;

    return noOfWays(n - 1) + noOfWays(n - 2) + noOfWays( n - 3);
}
 console.log(noOfWays(4) )

