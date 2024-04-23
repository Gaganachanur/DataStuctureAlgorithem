function anagram(a, b)
{
	
    let g = b.split('').sort();
    let k = a.split('').sort();

   if(a.length !== b.length)
   return false;
   let i =0;
   while(i<a.length){
       
       if(g[i] !== k[i]){
           return false;
       }
       i++
   }
   return true;

}
let arr1 ='122'
let arr2 ='122'

console.log(anagram(arr1,arr2));
