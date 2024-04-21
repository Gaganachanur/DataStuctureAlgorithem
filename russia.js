let find = 'The U.S.and its allies announced new sanctions and measures to hit Russia, such as removing selected Russian banks from the interbank messaging system, SWIFT.  Even though russia is going to face a lot of financial consequences it will ignore and move forward with its invasion.Word: “Russia”'

const findRussia = (find, a) =>{
let newFind =find.split(',');
console.log(newFind)
let count = 0;


for(let j =0;j<newFind.length;j++){
    let splite = newFind[j];
    splite =splite.split(' ');
    console.log(splite)
for(let i =j ; i<splite.length;i++){
    if(splite[i]==='Russian')
        count++;
}

}
return count;
}


console.log(findRussia(find, 'Russia'));