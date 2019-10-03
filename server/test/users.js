import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';
import user from './mockdata/users';
import Token from '../helpers/token';

chai.use(chaiHttp);
chai.should();
const adminToken = Token('admin@gmail.com');
const staffToken = Token('bugingo​@gmail.com');

describe('POST </>  Welcome message', () => {
  it('User should get welcome message', () => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.be.a('object');
      });
  });
});


describe('POST </api/v1/auth/signup>  sign up', () => {
  it('User should sign up', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user[0])
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.be.a('object');
      });
  });

  it('sign up validation', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send()
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.be.a('object');
      });
  });

  it('check if user exist', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user[0])
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.be.a('object');
      });
  });
});

describe('POST <api/v1/auth/signin>  sign in', () => {
  it('User should sign in', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user[2])
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.be.a('object');
      });
  });

  it('sign in validation', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send()
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.be.a('object');
      });
  });

  it('check if username and password are valid', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user[3])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.be.a('object');
      });
  });

  it('check if credentialss are corrrect', () => {
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user[3])
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.be.a('object');
      });
  });
});

describe('GET </api/v1/auth/>  Get all Users', () => {
  it('Admin should get all users', () => {
    chai
      .request(app)
      .get('/api/v1/auth/')
      .set('Authorization', `Bearer ${adminToken}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.be.a('object');
      });
  });

  it('Checker if staff is allowed to get all users', () => {
    chai
      .request(app)
      .get('/api/v1/auth/')
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.have.be.a('object');
      });
  });
});
