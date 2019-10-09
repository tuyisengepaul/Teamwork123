import incodePass from 'bcrypt';
import lodash from 'lodash';
import Token from '../helpers/token';
import Database from '../database/dbquerie';
import returnResponse from '../helpers/returnResponse';
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
  static async register(req, res) {
    const Userone = req.body;
    const data = {
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
    await Database.createUser(data);
    return returnResponse(req, res, 201, 'user added', {
      firstName: Userone.firstName,
      lastName: Userone.lastName,
      email: Userone.email,
      gender: Userone.gender,
      jobRole: Userone.jobRole,
      department: Userone.department,
      address: Userone.address,
      type: 'staff',
    });
  }

  /**
 * @author Tuyisenge Jean Paul
 * @param {object} req
 * @param {object} res
 * @description This method help the user to be signed in/
 */
  static async signin(req, res) {
    let data = '';
    const { email } = req.body;
    let token = '';
    const exitUser = await Database.selectBy('users', 'email', email);
    token = Token(email);
    data = {
      token,
      jobRole: exitUser.rows[0].jobRole,
    };
    return returnResponse(req, res, 200, 'login successfuly', data);
  }

  /**
 * @author Jean Paul Tuyisenge
 * @param {object} req
 * @param {object} res
 * @description Thi method help the admin to get all the users/
 */
  static async AllUsers(req, res) {
    const data1 = await Database.selectAll('users');
    let data = [];

    for (let item = 0; item <= data1.rowCount; item += 1) {
      let object = lodash.pick(data1.rows[item], ['firstName', 'lastName', 'email', 'gender', 'department', 'address', 'type']);
      data.push(object);
    }
    returnResponse(req, res, 200, 'success', data);
  }
}

export default User;
