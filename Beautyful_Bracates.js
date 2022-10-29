function beautyBrakets() {
     let count=0;
     let count1=0;
     let count2=0;
     for(let i=0;i<a.length;i++)
     {
          if(a[i]="{")
          {
               for(let j=i;j<a.length;j++)
               {
                    if(a[j]=="}"||a[j]=="{")
                         count++;

               }
          }
     }

     if(count%2!=0)
          return "not balanced"

     for(let i=0;i<a.length;i++)
     {
          if(a[i]="[")
          {
               for(let j=i;j<a.length;j++)
               {
                    if(a[j]=="["||a[j]=="]")
                         count1++;

               }
          }
     }

     if(count1%2!=0)
          return "not balanced"

     for(let i=0;i<a.length;i++)
     {
          if(a[i]="(")
          {
               for(let j=i;j<a.length;j++)
               {
                    if(a[j]=="("||a[j]==")")
                         count++;

               }
          }
     }
     if(count2%2!=0)
          return "not balanced"
     else
          return "balanced"

}


let a=["]","{","(","[",")","{","}","]"]
//let a=["{","[","(",")","]","}"];
console.log(beautyBrakets(a))