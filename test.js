const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index'); 
const { expect } = chai;

chai.use(chaiHttp);

describe('API Testing', () => {
  let token;
  describe('POST /api/register', () => {
    it('should register a new user', (done) => {
      chai
        .request(server)
        .post('/api/register')
        .send({
          username: 'testuser',
          email: 'testuser@example.com',
          password: 'password123',
        })
        .end((err, res) => {
          expect(res).to.have.status(201); 
          expect(res.body).to.have.property('message').eql('User registered successfully');
          done();
        });
    });
  });

  
  describe('POST /api/login', () => {
    it('should login the user and return a token', (done) => {
      chai
        .request(server)
        .post('/api/login')
        .send({
          email: 'testuser@example.com',
          password: 'password123',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          token = res.body.token; 
          done();
        });
    });
  });

  
  describe('POST /api/addproduct', () => {
    it('should add a new product', (done) => {
      chai
        .request(server)
        .post('/api/addproduct')
        .set('Authorization', `Bearer ${token}`) 
        .send({
          name: 'Test Product',
          price: 100,
          description: 'This is a test product',
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('message').eql('Product added successfully');
          done();
        });
    });
  });

  
  describe('GET /api/getproduct', () => {
    it('should fetch the list of products', (done) => {
      chai
        .request(server)
        .get('/api/getproduct')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array'); 
          done();
        });
    });
  });

  
  describe('POST /api/addcart', () => {
    it('should add a product to the cart', (done) => {
      chai
        .request(server)
        .post('/api/addcart')
        .set('Authorization', `Bearer ${token}`)
        .send({
          productId: 'sample-product-id',
          quantity: 1,
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').eql('Product added to cart');
          done();
        });
    });
  });
});
