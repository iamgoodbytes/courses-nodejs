import User from '../../../models/api/v1/User.js'
import bcrypt from 'bcrypt'

const saltRounds = 10

export const create = async (req, res, next) => {
  let email = req.body.email
  let password = req.body.password

  let userExisting = await User.find({ email: email })
  if (userExisting.length > 0) {
    console.log('👽')
    res.status(400).json({
      status: 'error',
      message: 'User already exists',
    })
  } else {
    let hash = await bcrypt.hash(password, saltRounds)
    await User.create({ email: email, hash: hash })

    res.status(201).json({
      status: 'success',
      message: 'User signup complete',
    })
  }
}
