
const missingTwo = (arr)=>{
   let map = new Map();
   let temp =[];

   for(let i =0;i<arr.length;i++)
        map.set(arr[i],arr[i]);
   
   for(let i =1;i<arr.length+2;i++){

     if(!map.has(i))
         temp.push(i);
     
   }
return temp;
}
let arr = [1,2,3,10,4,5,7,8];
console.log(missingTwo(arr));