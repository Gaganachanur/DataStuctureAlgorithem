// largest no-repeating substring 
//SDE -1 tech round-1 niyo


function largestSubString(name){
let arr = [];
let map  = new Map();

for(let i =0;i <name.length;i++){
    
    if(arr.includes(name[i])){                                                          
       map.set(arr.length,arr)
      arr =[name[i]];

    }else arr.push(name[i])
}
map.set(arr.length,arr);

let maxKey =0;
map.forEach((key,val)=>{          
maxKey= Math.max(maxKey,val)
})

return map.get(maxKey).join('');
}
//console.log(maxKey)

console.log(largestSubString('gagangraphgun'));
