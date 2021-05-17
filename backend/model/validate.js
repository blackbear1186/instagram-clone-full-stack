const joi = require('joi')

const schema = joi.object({
  username: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$'))
})

module.exports = {
  schema
}