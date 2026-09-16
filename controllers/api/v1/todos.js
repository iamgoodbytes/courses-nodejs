import Todo from '../../../models/api/v1/Todo.js'

export const list = async (req, res, next) => {
  let user = req.user
  console.log('☠️')
  console.log(user)

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
  const todo = new Todo({
    title: req.body.title,
    user: req.body.user,
    completed: req.body.status,
  })

  try {
    let doc = await todo.save()
    let result = {
      status: 'success',
      data: doc,
    }
    res.status(201).json(result)
  } catch (err) {
    let result = {
      status: 'error',
      message: err.message,
    }
    res.status(400).json(result)
  }
}

export const remove = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)
    let result = {
      status: 'success',
      data: null,
    }
    res.json(result)
  } catch (err) {
    let result = {
      status: 'error',
      message: err.message,
    }
    res.status(400).json(result)
  }
}

export const update = async (req, res, next) => {
  try {
    let doc = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true, runValidators: true },
    )
    let result = {
      status: 'success',
      data: doc,
    }
    res.json(result)
  } catch (err) {
    let result = {
      status: 'error',
      message: err.message,
    }
    res.status(400).json(result)
  }
}
