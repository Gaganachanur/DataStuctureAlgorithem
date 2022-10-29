function comd(a)
{
    let output="/.";
    for(let i=0;i<a.length;i++)
    {
        if(a[i]=="/..")
        {
            for(let j=i;j>=0;j--)
            {
                if(a[j]!=output && a[j]!="/.")
                {
                    output=a[j];
                    break;
                }
            }
        }
        if(a[i] !="/." && a[i]!="/" && a[i] !="//")
        {
            output=a[i];
        }

    }
    if(output=="/..")
          return "/";
    else return output;
}


// let a=["/home","/"]
//let a=["/a","/.","/b","/..","/..","/c","/g"];
//let a=["/a","/..","/"]
//let a=["/..","/..","/..","/..","/..","/a"];
//let a=["/a","/.","/b","/.","/c","/.","/d","/"];
//let a=["/a","/","/b","/","/c","//","/","//","/d"]
//let a=["/a","/..","/..","/.","/..","/..","/."]

console.log(`the current  directory is :${comd(a)}`);