import incodePass from 'bcrypt';
import Joi from '@hapi/joi';
import { userSignup } from '../helpers/validation';
import customize from '../helpers/customize';
import users from '../models/users';
import IdProider from '../helpers/idprovider';

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
}

export default User;
