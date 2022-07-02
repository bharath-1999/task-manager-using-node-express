const notfound=(req,res)=>{
  res.status(404).send("route doesnot exist");
}

module.exports=notfound;
