console.log('peace');

setTimeout(()=>{
console.log('Duuuude... hud mai rahe mere sath')
},2000);

setImmediate(()=>{
    console.log('selmon timeout')
});

process.nextTick(()=>{
 console.log('aaaaaaaahhh')
});

console.log('ultra')