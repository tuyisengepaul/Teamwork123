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
  
  describe('patch </api/v1/articles>  edit Article api', () => {
    it('article should be updated', (done) => {
      chai
        .request(app)
        .patch('/api/v1/articles/2')
        .send(articles[0])
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.be.a('object');
          done();
        });
    });
  
    it('article should be flagged', (done) => {
      chai
        .request(app)
        .patch('/api/v1/articles/1/flag')
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.be.a('object');
          done();
        });
    });
  
    it('should check if article exist', (done) => {
      chai
        .request(app)
        .patch('/api/v1/articles/0')
        .send(articles[1])
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.have.be.a('object');
          done();
        });
    });
      
    it('should check if user allowed to edit others article', (done) => {
      chai
        .request(app)
        .patch('/api/v1/articles/1')
        .send(articles[1])
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.have.be.a('object');
          done();
        });
    });

    it('should check if parameter is valid', (done) => {
      chai
        .request(app)
        .patch('/api/v1/articles/')
        .send(articles[1])
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.be.a('object');
          done();
        });
    });

    it('should check if parameters are valid', (done) => {
      chai
        .request(app)
        .patch('/api/v1/articles/ /')
        .send(articles[1])
        .set('Authorization', `Bearer ${staffToken}`)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.have.be.a('object');
          done();
        });
    });
  });