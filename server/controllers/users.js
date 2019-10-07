import incodePass from 'bcrypt';
import Token from '../helpers/token';
import Database from '../database/dbquerie';
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
    const exitUser = await Database.selectBy('users', 'email', Userone.email);

    if (exitUser.rowCount !== 0) {
      return res.status(409).json({
        status: '409',
        message: 'user alread exist!',
      });
    }
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
    const result = await Database.createUser(data);
    return res.status(201).json({
      status: '201',
      message: 'user added',
      data: result.rows[0],
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
    const userData = req.body;
    let token = '';
    const exitUser = await Database.selectBy('users', 'email', email);
    if (exitUser.rowCount !== 0) {
      if (exitUser.rows[0].email === userData.email && incodePass.compareSync(userData.password, exitUser.rows[0].password)) {
        token = Token(email);
        data = {
          id: exitUser.rows[0].id,
          firstName: exitUser.rows[0].firstName,
          lastName: exitUser.rows[0].lastName,
          email: exitUser.rows[0].email,
          password: exitUser.rows[0].password,
          gender: exitUser.rows[0].gender,
          jobRole: exitUser.rows[0].jobRole,
          department: exitUser.rows[0].department,
          address: exitUser.rows[0].address,
        };
      }
    }


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

  /**
 * @author Jean Paul Tuyisenge
 * @param {object} req
 * @param {object} res
 * @description Thi method help the admin to get all the users/
 */
  static AllUsers(req, res) {
    return res.status(200).json({
      status: '200',
      message: 'success',
      users,
    });
  }
}

export default User;
