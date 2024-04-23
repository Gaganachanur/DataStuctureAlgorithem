function distinct(a) {
    let b=[];
    let l=0;
    let k=0;
    let g=0;
    for(let i=0;i<a.length;i++)
    {
        if(check(a[i]))
        {
            l=i-1;
            console.log(`${k} to ${l}`)
            i=k+1;
        }else{
            b[g]=a[i];
            g++;
        }
    }

  function check(x)
  {
      for(let j=0;j<b.length;j++)
      {
          if(x==b[j])
          {
              return true;
          }
      }
      return false;
  }
}

let a=[5,2,3,5,4,3]
distinct(a)