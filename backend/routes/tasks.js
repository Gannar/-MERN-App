const express = require("express")
const router = express.Router()
const Task = require("../models/Task")

// GET tasks
router.get("/",async(req,res)=>{
 const tasks = await Task.find()
 res.json(tasks)
})

// ADD task
router.post("/",async(req,res)=>{
 const task = new Task({
  title:req.body.title
 })
 const saved = await task.save()
 res.json(saved)
})

// UPDATE task
router.put("/:id",async(req,res)=>{
 const task = await Task.findByIdAndUpdate(
  req.params.id,
  {completed:req.body.completed},
  {new:true}
 )
 res.json(task)
})

// DELETE task
router.delete("/:id",async(req,res)=>{
 await Task.findByIdAndDelete(req.params.id)
 res.json({message:"Task deleted"})
})

module.exports = router