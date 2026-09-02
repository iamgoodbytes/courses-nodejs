import mongoose from 'mongoose'
const Todo = mongoose.model('Todo', { user: String, title: String, completed: Boolean })

export const list = async (req, res, next) => {
  let docs = await Todo.find({})

  let result = {
    status: 'success',
    data: {
      todos: docs,
    },
  }
  res.json(result)
}

export const create = async (req, res, next) => {
  const todo = new Todo({ title: 'Learn nodejs', user: 'goodbytes', completed: false })
  let doc = await todo.save()

  let result = {
    status: 'success',
    data: doc,
  }
  res.json(result)
}

export const remove = (req, res, next) => {
  let result = {
    status: 'success',
    data: null,
  }
  res.json(result)
}

export const update = (req, res, next) => {
  let result = {
    status: 'success',
    data: {},
  }
  res.json(result)
}
