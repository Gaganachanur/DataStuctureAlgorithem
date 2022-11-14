 const minimumJump = (arr, n) =>{
         let jump = 0
         let curr = 0 
         let res = 0
         
         for(let i=0; i<n-1; i++){
              res=Math.max(res,arr[i]+i);
              if(curr==i){
                 curr=res;
                jump++;
             }
        }
        if(curr>=(n-1)){
          return jump;
        } else {
           return -1;
        }

    }

  console.log( minimumJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],10));



        