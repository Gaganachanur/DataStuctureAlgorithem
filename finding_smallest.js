function findsml(arr)
{
    let arr2=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j>=0;j--)
        {
           if(arr[j]<arr[i] && j>=0)
           {
               arr2[i]=arr[j];
               break;
           }else
           {
               arr2[i]="_";
           }
        }
    }
    console.log(arr2)

}
let arr=[1,6,4,10,2,5];
//let arr=[1, 3, 0, 2, 5];
//let arr=[-21,10,6,0,-1,9];
findsml(arr)