function remove_duplicate(arr,n){
        
    for(let i = 0; i<n-1;i++){
        
        if(arr[i] === arr[i+1]){
            arr = arr.splice(i,1);
            console.log(arr)
        }
    }
    return arr.length;
}
let arr = [1, 2, 2, 4], n= 4;
let ans = remove_duplicate(arr,n);
console.log(ans);