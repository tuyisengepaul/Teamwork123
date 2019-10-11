import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';
import comments from './mockdata/comments';
import Token from '../helpers/token';

chai.use(chaiHttp);
chai.should();


const admintoken = Token('admin@gmail.com');
const staffToken = Token('bugingo​@gmail.com');

describe('post </api/v1/comments>  create comment api', () => {
  it('a comment should be created', (done) => {
    chai
      .request(app)
      .post('/api/v1/comments/1')
      .send(comments[0])
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.be.a('object');
        done();
      });
  });

  it('should check if inputs are valid', (done) => {
    chai
      .request(app)
      .post('/api/v1/comments/1')
      .send()
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.be.a('object');
        done();
      });
  });

  it('should check if comment exist', (done) => {
    chai
      .request(app)
      .post('/api/v1/comments/0')
      .send(comments[0])
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.be.a('object');
        done();
      });
  });

  it('should check if comment exist', (done) => {
    chai
      .request(app)
      .post('/api/v1/comments/1')
      .send(comments[0])
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.be.a('object');
        done();
      });
  });
});

describe('patch </api/v1/comments>  flag comment api', () => {
  it('a comment should be flagged', (done) => {
    chai
      .request(app)
      .patch('/api/v1/comments/8')
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.be.a('object');
        done();
      });
  });

  it('should check if comment exist', (done) => {
    chai
      .request(app)
      .patch('/api/v1/comments/0')
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.be.a('object');
        done();
      });
  });
});

describe('delete </api/v1/comments>  delete comment api', () => {

  it('should check if comment exist', (done) => {
    chai
      .request(app)
      .delete('/api/v1/comments/0')
      .set('Authorization', `Bearer ${admintoken}`)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.have.be.a('object');
        done();
      });
  });
  it('flagged comment should be deleted', (done) => {
    chai
      .request(app)
      .delete('/api/v1/comments/8')
      .set('Authorization', `Bearer ${admintoken}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.be.a('object');
        done();
      });
  });
});
