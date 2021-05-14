let chai = require('chai');
let chaiHttp  = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);
const host = 'http://localhost:3000';

describe('Testing Query Api', () => {
    it('should  return status 200 for /api/query/send',function(done){
        chai
            .request(host)
            .post('/api/query/send')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({email:"abs@asdf",query:"whatever"})
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    });
})
