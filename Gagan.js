 function max_of_subarrays(arr, n, k)
{

    let S = 0;
    let list = [];
    let i=0;
    let j=0;
    let max =0;
    while(i <=n-k){
        
        while(S<k){
        if(S<k){
        max =(max>arr[j]) ? max:arr[j]
        j++;
        }else if(S>=k){
            list.push(max)
            S =0;
            max=0;
            j =list.length
        }
        S++;
    }
    i++;
    }
     console.log(list);
}

max_of_subarrays([1, 2 ,3 ,1, 4 ,5 ,2 ,3 ,6], 9 , 3)
