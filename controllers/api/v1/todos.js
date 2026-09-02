export const list = (req, res, next) => {
  let result = {
    status: 'success',
    data: {
      todos: [],
    },
  }
  res.json(result)
}

export const create = (req, res, next) => {
  let result = {
    status: 'success',
    data: {},
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
