//const something = require (somelibrary)
const express =  require ('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


async function main(){
     await mongoose.connect('mongodb+srv://pushpendra:pushpa70000@cluster0.2tvgl.mongodb.net/?retryWrites=true&w=majority')
}
main().then((d)=>{
    console.log('connected');
}).catch((err)=>{
    console.log('err',err);
})


let port = process.env.PORT 
app.listen(port,()=>{
    console.log('listening on port' + port)
});
