import express from 'express';

const app = express();
const PORT = process.env.port || 3000;


app.get('/', (req,res)=>{
    return res.send('Hello from Node.js Express Server sonish');
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})