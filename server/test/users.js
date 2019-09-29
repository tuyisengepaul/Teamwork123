import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';
import user from './mockdata/users';

chai.use(chaiHttp);
chai.should();

describe('POST <api/v1/auth/signup>  sign up', () => {
  it('User should sign up', () => {
    chai
      .request(app)
      .post('api/v1/auth/signup')
      .send(user[0])
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.be.a('object');
      });
  });

  it('sign up validation', () => {
    chai
      .request(app)
      .post('api/v1/auth/signup')
      .send()
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.be.a('object');
      });
  });

  it('check if user exist', () => {
    chai
      .request(app)
      .post('api/v1/auth/signup')
      .send(user[1])
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.be.a('object');
      });
  });
});

