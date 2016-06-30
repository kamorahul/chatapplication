var expect = require('chai').expect;
  describe('dbTestCases', function () {
    it('userInsert', function (done) {
       var data = {}
        var user = require("../controller/UsersC");
        user.insertUser({user_id: "234hjk234jk234jk234",user_name : "rahul",private_channel:"rahul-234hjk234jk234jk234"}).then(function(UserDataInserted){
            
//        printConsole("data",UserDataInserted)
        
        expect("rahul-234hjk234jk234jk234").to.equal(UserDataInserted.private_channel);
        }).then(function(){
            done();
        }).fail(function(){
            console.log("Test Failed !!!");
        })
//        
//      assert.equal(-1, [1,2,3].indexOf(5));
//      assert.equal(-1, [1,2,3].indexOf(0));
    });
      it('userQuery', function (done) {
       var data = {}
        var user = require("../controller/UsersC");
        user.findAll().then(function(UserData){
            
//        printConsole("data",UserData)
        expect("rahul-234hjk234jk234jk234").to.equal(UserDataInserted[0].private_channel);
        }).then(function(){
            console.log("")
        }).fail(function(){
            done();
            
        })
        
//      assert.equal(-1, [1,2,3].indexOf(5));
//      assert.equal(-1, [1,2,3].indexOf(0));
    });
       it('userQueryWithFilter', function (done) {
       var data = {}
        var user = require("../controller/UsersC");
        user.findUser("rahul-234hjk234jk234jk234").then(function(UserData){
            
        printConsole("data",UserData)
        expect("rahul-234hjk234jk234jk234").to.equal(UserDataInserted[0].private_channel);
        }).then(function(){
            console.log("Done")
            done();
        }).fail(function(){
            console.log("Err !!")
            
        })
  });

  });
var printConsole = function(parm,obj){
    if(obj != undefined)
        console.log(parm,JSON.stringify(obj))
    else
        console.log(parm)
}