import incodePass from 'bcrypt';
import lodash from 'lodash';
import users from '../models/users';
import IdProider from '../helpers/idprovider';
import Token from '../helpers/token';
import returnFc from '../helpers/returnFc';

/**
 * @author Jean Paul Tuyisenge
 * @description This class contains methods for registering user, sign in and fetch user /
 */
class User {
  /**
   *@author Jean Paul Tuyisenge
   * @param {object} req
   * @param {object} res
   * @description This method allows the user to register himself /
   */
  static register(req, res) {
    const Userone = req.body;
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
    const displayData = lodash.pick(data, ['firstName', 'lastName', 'email', 'gender', 'department', 'address', 'type']);
    returnFc(req, res, '201', 'user added', displayData);
  }

  /**
 * @author Tuyisenge Jean Paul
 * @param {object} req
 * @param {object} res
 * @description This method help the user to be signed in/
 */
  static signin(req, res) {
    let data = '';
    const { email } = req.body;
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
    returnFc(req, res, '200', 'login successfuly', token);
  }

  /**
 * @author Jean Paul Tuyisenge
 * @param {object} req
 * @param {object} res
 * @description Thi method help the admin to get all the users/
 */
  static AllUsers(req, res) {
    let data = [];

    for (let item = 0; item <= users.length - 1; item += 1) {
      let object = lodash.pick(users[item], ['firstName', 'lastName', 'email', 'gender', 'department', 'address', 'type']);
      data.push(object);
    }
    returnFc(req, res, '200', 'success');
  }
}
export default User;
