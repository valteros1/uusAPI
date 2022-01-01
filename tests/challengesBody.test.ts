import  request from 'supertest';
import {describe, it} from 'mocha';
import { expect } from 'chai';
import app from '../src/app';

const user = {
    email: 'toomas@joomas.ee',
    password: 'toomas'
};

let token: string;

describe('challengesBody controller', () => {
    describe('GET /challengesBody', () => {
      it('responds with code 200 and token after login', async () => {
        const response = await request(app)
          .post('/login')
          .send(user);
        expect(response.body).to.be.a('object');
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.key('token');
        expect(response.body.token).to.be.a('string');
        token = response.body.token;
      });

        it('responds with code 401 and error message', async () => {
            const response = await request(app).get('/challengesBody');
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(401);
            expect(response.body).to.have.key('error');
            expect(response.body.error).to.equal('Invalid token or not provided');
        });
        it('responds with code 401 and error message because of invalid token', async () => {
            const response = await request(app)
              .get('/challengesBody')
              .set('Authorization', 'Bearer ölkxjdkljdglkjdgöljeöotuiöjkvlnvösodhg');
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(401);
            expect(response.body).to.have.key('error');
            expect(response.body.error).to.equal('Invalid token');
          });
          it('responds with code 200 and array of challenges', async () => {
            const response = await request(app)
              .get('/challengesBody')
              .set('Authorization', `Bearer ${token}`);
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.key('data');
            expect(response.body.challengesBody).to.be.a('array');
            expect(response.body.challengesBody.length).to.greaterThan(0);
          });
         
    });
}); 

     describe('POST /challengesBody', () => {
         it('responds with code 400 and error message because of missing description', async () => {
             const response = await request(app)
              .post('/challengesBody')
              .set('Authorization', `Bearer ${token}`)
              .send({
                   id: Number,
                   challenge: String




               });
             expect(response.body).to.be.a('object');
             expect(response.statusCode).to.equal(404);
             expect(response.body).to.have.key('error');
             expect(response.body.error).to.be.a('string');
             expect(response.body.error).to.equal('Challenge is required');
           });

     });

