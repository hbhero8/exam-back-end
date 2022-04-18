const mongoose = require("mongoose")
const Schema = mongoose.Schema

const toDoSchema = new Schema({
       task_name: {
        type: String,
        required: [true, "Oh Come on! Food name is must!"],
      },
      created_date: {
        type: Date,
        default: Date.now
      },
      checked_date: {
        type: Date
      },
      active_status:{
        type: Boolean,
        default: true
      }
})

const ToDo = mongoose.model("toDo", toDoSchema)
module.exports = ToDo