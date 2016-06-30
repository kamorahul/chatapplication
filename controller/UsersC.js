var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/chatdb")
var User = require("../model/Users");
var q = require("q")

exports.findAll = function(){
    var D = q.defer();
    User.find({},function(err,UsersData){
        printConsole("UsersDataFind",UsersData)
        if(err){
            printConsole("err >>",err);
            D.reject(err);
        }
         D.resolve(UsersData);
    })
    return D.promise
}



exports.findUser = function(userName){
    var D = q.defer();
    User.find({user_name:userName},function(err,UsersData){
        printConsole("UsersDataFind",UsersData)
        if(err){
            printConsole("err >>",err);
            D.reject(err);
        }
         D.resolve(UsersData);
    })
    return D.promise
}

exports.insertUser = function(userData){
    var D = q.defer();
    var newUser = new User(userData);
     newUser.save(function(err,UsersData){
        printConsole("UsersDataInserted",UsersData)
//        return UsersData;
       if(err){
            printConsole("err >>",err);
            D.reject(err);
        }
         D.resolve(UsersData);
    })
      return D.promise
}


exports.updateUser = function(query,updateData,options){
    var D = q.defer();
    
     User.update(query,updateData,function(err,UsersData){
        printConsole("UsersDataInserted",UsersData)
//        return UsersData;
       if(err){
            printConsole("err >>",err);
            D.reject(err);
        }
         D.resolve(UsersData);
    })
      return D.promise
}


var printConsole = function(parm,obj){
   
//        console.log(parm,JSON.stringify(obj))
    
}