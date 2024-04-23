function count(a) {
    let co=0;let c1=0;let k=0;
    let b=[];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==0)
        {
            co=co+1;
        }
        if(a[i]==1)
        {
            c1=c1+1;
        }
        if(co==c1)
        {
            console.log(`${k} to ${i}`)
        }
    }

}


let a=[0,0,1,1,0]
//let a=[1, 0, 1, 1, 1, 0, 0];
//let a=[1,1,1,1,1];
//let a=[0,0,0,0,0]
count(a)