const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const validateUser = (user) => {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: passwordComplexity().required(),
    });
  
    return schema.validate(user);
}

const validateRegisterUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: passwordComplexity().required(),
        passwordConfirmation: passwordComplexity().required().valid(Joi.ref('password')),
    });

    return schema.validate(user);
}

const validateOtp = (otpd) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        otp: Joi.string().required(),
    });

    return schema.validate(otpd);
}

const validateUserId = (user) => {
    const schema = Joi.object({
        userId: Joi.string().required()
    });

    return schema.validate(user);
}

const validateRole = (role)=>{
    const schema = Joi.object({
        role: Joi.object({
            
        })
    });
    return schema.validate(role);
}

module.exports = {
    validateUser,
    validateRegisterUser,
    validateOtp,
    validateUserId,
    validateRole 
}