const express=require('express')

const app=express()
const checktime=require('./middleware/checktime')
const checkday=require('./middleware/checkday')

const PORT = process.env.PORT || 3000


app.use('/',checktime,checkday,require('./routes/api'))

app.listen(PORT,()=>{
    console.log('server running')
})