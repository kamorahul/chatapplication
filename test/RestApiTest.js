//var serviceDetail = {"hostname": "192.168.0.153", "port":500, path: "/file", "method": "GET"};
var serviceDetail = {"hostname": "localhost", "port":3000, path: "/restCall", "method": "GET"};

var expect = require('chai').expect;
var api = require("../controller/RestUtil")
  describe('RestApiTest', function () {
    it('ApiTest', function (done) {
        api.executeService(serviceDetail,{}).then(function(returnVal){
            console.log(returnVal);
             expect("Test Api").to.equal(returnVal);
        }).then(function(){
            console.log("done");
            done();
        }).fail(function(){
            console. log("Fail !!")
            
        })
    });
    
  });
var printConsole = function(parm,obj){
    if(obj != undefined)
        console.log(parm,JSON.stringify(obj))
    else
        console.log(parm)
}