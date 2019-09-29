import incodePass from 'bcrypt';
import Joi from '@hapi/joi';
import { userSignup, userSignin } from '../helpers/validation';
import customize from '../helpers/customize';
import users from '../models/users';
import IdProider from '../helpers/idprovider';
import Token from '../helpers/token';

class User {
  static register(req, res) {
    const Userone = req.body;
    let message = '';
    const { error } = Joi.validate(Userone, userSignup);
    if (error) {
      return customize.validateError(req, res, error, 400);
    }

    users.forEach((newUser) => {
      if (newUser.email === Userone.email) {
        message = 'user already exists';
      }
    });
    if (message) {
      return res.status(409).json({
        status: '409',
        message,
      });
    }
    const data = {
      id: IdProider(users),
      firstName: Userone.firstName,
      lastName: Userone.lastName,
      email: Userone.email,
      password: incodePass.hashSync(req.body.password, 10),
      gender: Userone.gender,
      jobRole: Userone.jobRole,
      department: Userone.department,
      address: Userone.address,
      type: 'staff',
    };

    users.push(data);
    return res.status(201).json({
      status: '201',
      message: 'user added',
      data,
    });
  }

  static signin(req, res) {
    let data = '';
    const { email } = req.body;

    const { error } = Joi.validate(req.body, userSignin);
    if (error) {
      return customize.validateError(req, res, error, 400);
    }

    const userData = req.body;
    let token = '';
    users.map((user) => {
      if (user.email === userData.email && incodePass.compareSync(userData.password, user.password)) {
        token = Token(email);
        data = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          gender: user.gender,
          jobRole: user.jobRole,
          department: user.department,
          address: user.address,
        };
      }
    });


    if (!data) {
      return res.status(404).send({
        status: 404,
        message: 'User not found, Incorrect email or password',
      });
    }
    return res.status(200).send({
      status: '200',
      message: 'login successfuly',
      token,
      data,
    });
  }

  static AllUsers(req, res) {
    return res.status(200).json({
      status: '200',
      message: 'success',
      users,
    });
  }
}

export default User;
