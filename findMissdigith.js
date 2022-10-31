function find(a, n)
{
    let total = Math.floor((n + 1) * (n + 2) / 2);

    for (let i = 0; i < n; i++){
        total -= a[i];}
    return total;
}
let a=[1,3,4,5]
let n= a.length
console.log(find(a, n));