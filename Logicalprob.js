function units(A)
{
    let arr=[],count=1,total=0,g=0;
    for(let i=1;i<A.length;i++)
    {
        count =count *10;
    }
    for(let i=0;i<A.length;i++)
    {
        total=total+A[i]*count;
        count =count/10;
    }
    console.log(total)
    total +=1;
    while(total>0)
    {
       g=total%10;
     arr.push(g)//console.log(g)
       total =parseInt(total/10);
    }
   while(arr.length !=0)
   {
       console.log(`the elements are ${arr.pop()}`)
   }
}
A=[9,9]
units(A)
A=[1,3]
units(A)

//s.pop();