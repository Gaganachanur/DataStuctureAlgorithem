const secondLargest = (arr) =>{
    let large = 0;
    let secondlarge = 0;
      for(let i =0; i<arr.length;i++){
               if(arr[i]>large){
                secondlarge = large;
                large = arr[i];
               }else if(arr[i]!= large && arr[i]>secondlarge){
                secondlarge = arr[i];
               }
      }
      return secondlarge
}

let arr =[9,100,0,100,30]; 
console.log(secondLargest(arr));