// Write a function that tells if a given number is perfect or not. A number is called perfect if the
// //     sum of the factors of a number (excluding the number itself) is the number itself.
// //     Return “Perfect” if the number is perfect
// // if the sum of factors is greater than the input return “Abundant”
// // if the sum of factors is lesser than the input return “Deficient”.
// // Example:
// // 1) 6 -> factors(1,2,3) -> sum (1+2+3) = 6 (perfect number)
// // 2) 12 -> factors(1,2,3,4,6) -> sum(1+2+3+4+6) = 16 > 12
// // 3) 8 -> factors(1,2,4) -> sum(1+2+4) = 7 < 8 (Deficient)



function syookE1(g)
{
    let sum=0;
    for(let i=1 ; i<g ;i++)
    {
        if(g%i === 0)
            sum += i;
    }

    if(sum === g)
    {
        return('prefect number');
    }else if(sum > g)
    {
        return ('Abundant')
    }else
    {return ('Deficient')}

}
console.log(syookE1(6));
console.log(syookE1(12));
console.log(syookE1(8));