// const express = require('express')
// let app  =express();

// app.get('/',(req,res)=>{
// res.send('hellow world')
// });

// app.listen(8000,()=>{
//     console.log('app is listing at port 8000')
// })

// const express = require('express')
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello wold')
// });

// app.listen(8000,()=>{
//     console.log(`appis listen at http://localhost:8000`);
// })

const express = require('express')

let app = express();

app.get('/',(req,res)=>{
    res.send('hello word')
});

app.listen(3000,()=>{console.log('server running in port 3000')})