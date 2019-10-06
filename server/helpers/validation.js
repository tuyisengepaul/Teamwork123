import Joi from '@hapi/joi';

const userSignup = Joi.object().keys({

  firstName: Joi.string().alphanum().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().regex(/^((?=.*[a-z])(?=.*[A-Z]))(?=.*[0-9])(?=.{8,})/).required(),
  gender: Joi.string().required(),
  jobRole: Joi.string().required(),
  department: Joi.string().required(),
  address: Joi.string().required(),
});

const userSignin = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().required(),

});

const article = Joi.object().keys({
  title: Joi.string().required(),
  article: Joi.string().required(),
});

const comment = Joi.object().keys({
  comment: Joi.string().required(),
});

const parameter = Joi.object().keys({
  id: Joi.number().required(),
});

const parameterFlag = Joi.object().keys({
  id: Joi.number().required(),
  flag: Joi.string().valid('flag').required(),
});

export {
  userSignup, userSignin, article, comment, parameter, parameterFlag,
};
