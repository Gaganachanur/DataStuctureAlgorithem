const waterTraping = (height, n)=>{ 
    let left  = new Array(n);
    let right = new Array(n);
left[0] = height[0];
right[n-1] = height[n-1];
let watercollected =0;

    for(let i =1 ;i<n;i++)
     left[i] =Math.max(left[i-1], height[i]);

     for(let i= n-2; i>=0;i--)
     right[i] = Math.max(right[i+1], height[i])
     
  for(let i =0;i<n;i++)
  watercollected += Math.min(left[i], right[i]) - height[i]

  return watercollected;
}

console.log(waterTraping([8 ,8 ,2 ,4 ,5 ,5 ,1], 7))