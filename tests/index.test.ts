import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/app';

chai.use(chaiHttp);
chai.should();

describe('Index', () => {
  describe('GET /', () => {
    it('should contain "Kubercade Home"', done => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.include('Kubercade Home');
          done();
        });
    });
  });
});
