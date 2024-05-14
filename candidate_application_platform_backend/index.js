const express = require('express')

const app = express();
const dbConnect = require('./dbConnect')
const dotenv = require('dotenv')
dotenv.config('./.env')
const cors = require('cors')
const authRouter = require('./routers/authRouter')


app.use(cors({
   credentials : true,
   origin : 'http://localhost:3000'
}))
dbConnect();

app.use(express.json())
app.use('/api',authRouter);



const PORT = process.env.PORT || 40001

app.listen(PORT,(req,res)=>{
    
   console.log(`Server is running at PORT ${PORT}`);
})



