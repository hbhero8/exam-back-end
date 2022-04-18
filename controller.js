const express = require("express")
const { validationResult } = require("express-validator")
const ToDo = require("./models")

const get_lists = (req,res,next) =>{
  ToDo.find({}, function (err,data){
    if(err)
    req.json({
      success:false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  })
}

const create_list = (req,res,next) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      success:false,
      errors: errors.array(
      )
    })
  }else{
    const data = req.body 
    ToDo.create(data,function (err, data){
      if(err) 
      res.json({
        success:false,
        data: err
      })
      else
      res.json({
        success: true,
        data: data}
      )
    })
  }

}

const update_list = (req,res,next) => {
  const data = req.body
  const id = req.params.id 
  ToDo.updateOne({_id:id}, data, function(err,data){
    if(err) 
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success:true,
      data:data
    })
  })
}
const update_status = (req,res,next) => {
  const data = req.body
  const id = req.params.id 
  ToDo.findOneAndUpdate({_id:id}, data, function(err,data){
    if(err) 
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success:true,
      data:data
    })
  })
}

const delete_list = (req,res,next) =>{
  ToDo.findOneAndDelete({
    _id:req.params.id
  }) 
  .then((data)=> res.json(data))
  .catch((err)=> res.json(err))
}

module.exports = {
  get_lists,create_list,update_list,delete_list,update_status
}