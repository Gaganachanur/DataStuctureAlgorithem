
// console.log("This is tutorial 43");
// //
// // async function harry(){
// //     console.log('Inside harry function');
// //     const response = await fetch('https://api.github.com/users');
// //     console.log('before response');
// //     const users = await response.json();
// //     console.log('users resolved')
// //     return users;
// //
// //     // return "harry";
// // }
// //
// // console.log("Before calling harry")
// // let a = harry();
// // console.log("After calling harry")
// // console.log(a);
// // a.then(data => console.log(data))
// // console.log("Last line of this js file")



// function  peace() {
//     console.log("pace");
//     console.log(a++);
//
//     if(a === 10)
//     {
//         clearInterval(king);
//     }
//
// }
// let a=0;
// let king =setInterval(peace, 1000);

let peace =new Promise((resolve, reject) => {
    let a=560
    if(a === 56)
        resolve('peace')
    else
        reject('not peace')

})
peace.then(bob , ultra);

function bob() {
    console.log('peace anko bob ')
}
function ultra(){
    console.log(' not peace anko bob ')
}
