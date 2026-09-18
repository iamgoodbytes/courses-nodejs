import User from '../../../models/api/v1/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRounds = 10

export const login = async (req, res, next) => {
  let email = req.body.email
  let password = req.body.password

  let userExist = await User.findOne({ email: email })
  if (!userExist) {
    res.json({
      status: 'error',
      message: 'Cannot login',
    })
  } else {
    // user DOES exist
    let result = await bcrypt.compare(password, userExist.hash)
    if (result) {
      let token = jwt.sign({ email: email, uid: userExist._id }, process.env.JWTSECRET)
      res.send({
        status: 'success',
        token: token,
      })
    } else {
      res.json({
        status: 'error',
        message: 'Cannot login',
      })
    }
  }
}
