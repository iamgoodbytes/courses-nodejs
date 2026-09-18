import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
  let token = req.headers.authorization || null
  if (!token) {
    res.status(401).json({
      status: 'error',
      message: 'invalid token',
    })
    return
  }
  token = token.split(' ')[1]

  try {
    let decoded = jwt.verify(token, process.env.JWTSECRET)
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
