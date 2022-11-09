// async function harry(){
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;

//     return "harry";
// }

// console.log("Before calling harry")
// let c = harry();
// console.log("After calling harry")
// console.log(c);
// c.then(data => console.log(data))
// console.log("Last line of this js file")



// function  peace() {
//     console.log("pace");
//     console.log(a++);

//     if(a === 10)
//     {
//         clearInterval(king);
//     }

// }
// let a=0;
// let king =setInterval(peace, 1000);

let peace =new Promise((resolve, reject) => {
    let a=560
    if(a === 560)
        resolve()
    else
        reject()

})
peace.then(bob)
.catch(ultra);

function bob() {
    console.log('peace anko bob ')
}
function ultra(){
    console.log(' not peace anko bob ')
}


let letMePromis =new Promise((resolve,reject)=>{
    let g = 'rotor';
    
    if(g.length === 5 )
    resolve();
    else
     reject();
    
})
letMePromis.then(()=>{console.log('resolved')})
.catch(()=>{console.log('rejected')})