let chai = require('chai');
let should = chai.should();

const helloWorld = require('../src/helloWorld');

describe('HelloWorld', () => {
  it('should return hello world with no arguments', (done) => {
    helloWorld().should.be.eql('hello world');
    done();
  });
  
  it('should return passed argument', (done) => {
    helloWorld('some other value').should.be.eql('some other value');
    done();
  });
});