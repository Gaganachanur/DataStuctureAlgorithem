function rotateArr(arr, d, n){
    let val ;
    let temp = [], res =[];
    for(let i = 0 ; i<d;i++){
        
        arr.push(arr[i])
    }
    
    arr = arr.slice(d)
   
   console.log(arr)
   
    
    
    return arr;
}

let arr = [1,2,3,4,5],d =2, n= 5;
let ans = rotateArr(arr, d, n);

console.log(ans)