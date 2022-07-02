const Express=require('express');
const app=Express();

const tasks=require('./routes/tasks');
const connectDB=require('./db/connect');
const notfound=require('./middleware/notfound.js')
require('dotenv').config();
//middleware
app.use(Express.static('./public'));
app.use(Express.json());

//routes


app.use('/api/v1/tasks',tasks);
app.use(notfound);



const start=async ()=>{
  try{
    await connectDB(process.env.MONGO_URI);
    await app.listen(5000,()=>{
      console.log("listening on port 5000....");
    });
  }
  catch (error){
  console.log("here amma");
  }
}
start();
