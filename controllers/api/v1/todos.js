import { request } from 'express'
import Todo from '../../../models/api/v1/Todo.js'

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
