import  request from 'supertest';
import {describe, it} from 'mocha';
import { expect } from 'chai';
import app from '../src/app';

const user = {
    email: 'toomas@joomas.ee',
    password: 'toomas'
};

let token: string;

let testID: number;

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
            expect(response.body.data).to.be.a('array');
            expect(response.body.data.length).to.greaterThan(0);
          });
         
    });
}); 

describe('challengesBody controller', () => {
    describe('GET /challengesBody/1', () => {
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

        it('responds with code 404 and error message', async () => {
            const response = await request(app).get('/challengesBody/1');
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(404);
            expect(response.body).to.have.key('error');
            expect(response.body.error).to.equal('No valid id provided');
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
              .get('/challengesBody/1')
              .set('Authorization', `Bearer ${token}`);
            expect(response.body).to.be.a('object');
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.key('data');
            expect(response.body.data).to.be.a('array');
            expect(response.body.data.length).to.greaterThan(0);
          });
         
    });
}); 



describe('challengesBody controller', () => {
  describe('POST /challengesBody', () => {
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
          const response = await request(app).post('/challengesBody');
          expect(response.body).to.be.a('object');
          expect(response.statusCode).to.equal(401);
          expect(response.body).to.have.key('error');
          expect(response.body.error).to.equal('Invalid token or not provided');
      });

    });

    it('responds with code 200 and array of challenge', async () => {
      const response = await request(app)
        .post('/challengesBody')
        .set('Authorization', `Bearer ${token}`)
        .send({challengesBody: 'testKeha'});

      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.key('id');
      expect(response.body.id).to.be.a('number');
      testID = response.body.id;
      // console.log("teeme siis nii", testID);
       });

       it('UPDATE TEST responds with code 200 and array of challenge', async () => {
        const response = await request(app)
          .patch(`/challengesBody/${testID}`)
          .set('Authorization', `Bearer ${token}`)
          .send({challenge: 'changedBody'});
  
        expect(response.body).to.be.a('object');
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.key('changed');
        expect(response.body.changed).to.be.a('number');
         });
  });






    //  describe('POST /challengesBody', () => {
    //      it('responds with code 400 and error message because of missing description', async () => {
    //          const response = await request(app)
    //           .post('/challengesBody')
    //           .set('Authorization', `Bearer ${token}`)
    //           .send({
    //                id: Number,
    //                challenge: String




    //            });
    //          expect(response.body).to.be.a('object');
    //          expect(response.statusCode).to.equal(404);
    //          expect(response.body).to.have.key('error');
    //          expect(response.body.error).to.be.a('string');
    //          expect(response.body.error).to.equal('Challenge is required');
    //        });

    //  });

