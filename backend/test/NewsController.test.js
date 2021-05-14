let chai = require('chai');
let chaiHttp  = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing News Api', () => {
    it('should  return status 200 for /api/news/getNews',function(done){
        chai
            .request('http://localhost:3000')
            .get('/api/news/getNews')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    });



})
