import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';
import comments from './mockdata/comments';
import Token from '../helpers/token';

chai.use(chaiHttp);
chai.should();
const admintoken = Token('admin@gmail.com');
const staffToken = Token('bugingo​@gmail.com');

describe('post </api/v1/commentes>  create comment api', () => {
  it('acomment should be created', (done) => {
    chai
      .request(app)
      .post('/api/v1/commentes/1')
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
      .post('/api/v1/commentes/1')
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
      .post('/api/v1/commentes/0')
      .send(comments[0])
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.be.a('object');
        done();
      });
  });
});

describe('patch </api/v1/commentes>  flag comment api', () => {
  it('acomment should be flagged', (done) => {
    chai
      .request(app)
      .patch('/api/v1/commentes/1')
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
      .patch('/api/v1/commentes/0')
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.be.a('object');
        done();
      });
  });
});

describe('delete </api/v1/commentes>  delete comment api', () => {
  it('flagged acomment should be deleted', (done) => {
    chai
      .request(app)
      .delete('/api/v1/commentes/3')
      .set('Authorization', `Bearer ${admintoken}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.be.a('object');
        done();
      });
  });

  it('should check if comment exist', (done) => {
    chai
      .request(app)
      .delete('/api/v1/commentes/0')
      .set('Authorization', `Bearer ${admintoken}`)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.have.be.a('object');
        done();
      });
  });

  it('should check if a staff is allowed to delete', (done) => {
    chai
      .request(app)
      .delete('/api/v1/commentes/3')
      .set('Authorization', `Bearer ${staffToken}`)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.have.be.a('object');
        done();
      });
  });
});
