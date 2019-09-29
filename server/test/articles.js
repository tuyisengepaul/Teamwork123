import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';
import articles from './mockdata/articles';
import Token from '../helpers/token';

chai.use(chaiHttp);
chai.should();
const staffToken = Token('bugingo​@gmail.com');

describe('post </api/v1/articles>  create article api', () => {
    it('article should be created', (done) => {
      chai
        .request(app)
        .post('/api/v1/articles')
        .send(articles[0])
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
        .post('/api/v1/articles')
        .send()
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.be.a('object');
          done();
        });
    });
  
    it('should check if article exist', (done) => {
      chai
        .request(app)
        .post('/api/v1/articles')
        .send(articles[1])
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.have.be.a('object');
          done();
        });
    });
  });
