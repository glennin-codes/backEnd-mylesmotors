
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './db/config'

dotenv.config()

const app= express()


const PORT= process.env.PORT || 8000

app.get('/',(req,res)=>{
res.send('hey loo...')
})
const start= async  ()=>{

try{
await connectDb(process.env.MONGO_URI,{

})
app.listen(PORT, ()=>{
console.log("server running on "+ PORT)


})

}
catch(error){
    console.log(error)

}

}
start()