import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
  let token = req.headers.authorization
  token = token.split(' ')[1]

  try {
    let decoded = jwt.verify(token, 'shhhhh')
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({
      status: 'error',
      message: 'invalid token',
    })
  }
}

export default authenticate
