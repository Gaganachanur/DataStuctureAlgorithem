// ar1[] = {1, 5, 10, 20, 40, 80}
// // ar2[] = {6, 7, 20, 80, 100}
// // ar3[] = {3, 4, 15, 20, 30, 70, 80, 120}
// // Output: 20, 80
let ar1=[1, 5, 10, 20, 40, 80]
let ar2=[6, 7, 20, 80, 100]
let ar3=[3, 4, 15, 20, 30, 70, 80, 120]
let peace=[];
let p=0;
for(let i=0;i<ar1.length;i++)
{
    let k=ar1[i]
    for(let j=0; j<ar2.length;j++)
    {
        if(k  == ar2[j])
        {
            peace[p++]=k;
        }

    }
}
for(let i=0;i<peace.length;i++)
{
    let x=peace[i]
    for(let j=0; j<ar3.length;j++)
    {
        if(x == ar3[j])
        {
            console.log(x)
        }
    }
}