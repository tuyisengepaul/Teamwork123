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
  
  