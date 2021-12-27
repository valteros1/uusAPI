import  request from 'supertest';
import {describe, it} from 'mocha';
import { expect } from 'chai';
import app from '../src/app';

const user = {
    email: 'toomas@joomas.ee',
    password: 'toomas'
};

let token: string;

describe('challengesMind controller', () => {
    describe('GET /challengesMind', () => {
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
            const response = await request(app).get('/challengesMind');
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(401);
            expect(response.body).to.have.key('error');
            expect(response.body.error).to.equal('Invalid token or not provided');
        });
        it('responds with code 401 and error message because of invalid token', async () => {
            const response = await request(app)
              .get('/challengesMind')
              .set('Authorization', 'Bearer ölkxjdkljdglkjdgöljeöotuiöjkvlnvösodhg');
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(401);
            expect(response.body).to.have.key('error');
            expect(response.body.error).to.equal('Invalid token');
          });
          it('responds with code 200 and array of challenges', async () => {
            const response = await request(app)
              .get('/challengesMind')
              .set('Authorization', `Bearer ${token}`);
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.key('challengesMind');
            expect(response.body.challengesMind).to.be.a('array');
            expect(response.body.challengesMind.length).to.greaterThan(0);
          });
         
    });
    // describe('POST /challengesMind', () => {
    //     it('responds with code 400 and error message because of missing description', async () => {
    //         const response = await request(app)
    //           .post('/challengesMind')
    //           .set('Authorization', `Bearer ${token}`)
    //           .send({
    //               id: Number,
    //               challenge: String




    //           });
    //         expect(response.body).to.be.a('object');
    //         expect(response.statusCode).to.equal(400);
    //         expect(response.body).to.have.key('challengesMind');
    //         expect(response.body.error).to.be.a('string');
    //         expect(response.body.error).to.equal('Excuse description is required');
    //       });

    // });

}); 