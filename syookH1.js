// 2) n-Chai!
// You like chai very much and you want to drink exactly “n” cups of chai. You would be happy to
// drink more but you have exactly “n” chai bags, “g” of them are green, and “b” are black.
//     You would not like to drink the same chai (green or black) more than “k” times in a row.
//     Your task is to determine the order of making tea so that you will be able to drink “n” cups of tea,
//     without drinking the same chai more than “k” times in a row, or to inform that it is impossible to
// do that with the given inputs. Each chai bag can be used exactly once.
//     Note: g + b is always equal to “n”. I.e number of green and black chai bags total is always equal
// to the number of times you want to drink chai.
//     Example:
// Input -> n: 5, k: 1, g: 3, b: 2
// Output -> [“Green”,”Black”,”Green”,”Black”,”Green”]
// Input -> n: 4, k: 3, g: 4, b: 0
// Output -> []

function syookH1(n, k, g, b)
{
    if(g === 0 || b=== 0 )return []

    let chai = [];
     for(let i=0;i<n ;i++)
     {
         if(g !== 0 ) {
             chai[i] = "green";
             i = i + k;
             g--
         }
     }
    for(let j= 0 ; j< n ;j++)
    {
        if(b!== 0 && chai[j] !== "green")
        {
            chai[j] = "black";
            b--
        }
    }

return chai;

}
let n=5;
let k=1;
let g=3;
let b=2;
console.log(syookH1(n, k, g, b))
// let n=4;
// let k=3;
// let g=4;
// let b=0;
// console.log(syookH1(n, k, g, b))

