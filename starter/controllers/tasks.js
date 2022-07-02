const Task=require('../models/task');
const getAllTasks=async (req,res)=>{
try{
  const tasks=await Task.find({});
  res.status(200).json({tasks});
}
catch(error){
  res.status(500).json({msg:error});
}
  return;
};

const createTask=async (req,res)=>{
  try{
    const task=await Task.create(req.body)
    res.status(201).json({task});
  }
  catch (error){
    res.status(500).json({msg:error});
  }

  return;
};
const getSingleTask=async (req,res)=>{
try{
  const {id:taskID}=req.params;
  console.log(taskID);

  const task=await Task.findOne({_id:taskID});
  console.log("here")
  if(!task){
    return res.status(404).json({msg:`No task with id:${taskID}`})
  }
  res.status(200).json({task});
}
catch(error){
res.status(500).json({msg:error});
}
  return;
};
const deleteTask=async (req,res)=>{
try{
  const {id:taskID}=req.params;
  const task=await Task.findOneAndDelete({_id:taskID});
  if(!task){
    res.status(404).send("requested task is not there in database");

  }
  res.status(200).json({task});
}
catch(error){
res.status(500).json({msg:error});
}
  return;
};
const updateTask=async (req,res)=>{
try{
  const {id:taskID}=req.params;
  const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
    new:true,
    runValidators:true
  })
  if(!task){
    res.status(404).send("requested task is not there in database");
return;
  }
res.status(200).send({task});

}
catch(error){
res.status(404).send({msg:error});
}

  return;
};
module.exports={
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}
