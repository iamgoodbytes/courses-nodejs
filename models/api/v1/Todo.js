import mongoose from 'mongoose'
const { Schema } = mongoose

const todoSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  completed: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)
export default Todo
