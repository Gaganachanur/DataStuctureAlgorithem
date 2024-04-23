/*
Given an integer array, check if it contains a subarray having zero-sum.

Example:

Input:  {  3, 4, -7,3, 1, 3, 1, -4, -2, -2 }

Output: Subarray with zero-sum exists

The subarrays with a sum of 0 are:

{ 3, 4, -7 }
{ 4, -7, 3 }
{ -7, 3, 1, 3 }
{ 3, 1, -4 }
{ 3, 1, 3, 1, -4, -2, -2 }
{ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

*/
function hash(a)
{
    let sum=0;
    let k=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
        if(sum==0)
        {
            for(let j=i;j>=k;j--)
            {
                console.log(a[j])
            }
                i=k+1;
             k=i;
            sum=0;
        }
    }
}




let a=[3,4,-7,3,1,3,1,-4,2,-2];
hash(a)
