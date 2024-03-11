import Joi from "joi"

export const UserValidator = Joi.object({
  fullname: Joi.string().required(),
  alamat: Joi.string().required(),
  jenis_kelamin: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required()
})