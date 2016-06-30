// var serviceDetail = {"hostname": "192.168.0.159", "port":502, path: "/file", "method": "GET"};
var QueryString = require("querystring");
var http = require("http")



exports.executeService = function(service, params) {
    var Q = require("q");
    var d = Q.defer();
    var path = service.path;
    var queryString = "";
    if (Object.keys(params).length > 0) {
        queryString = QueryString.stringify(params);
    }
    var serverOptions = {
        hostname: service.hostname,
        port: service.port,
        path: path,
        method: service.method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': queryString.length
        }
    };
    var req = http.request(serverOptions, function (res) {
        if (params.response) {
            res.setEncoding('binary');
        } else {
            res.setEncoding('utf8');
        }
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            d.resolve(body);
        });
    });
    req.on('error', function (err) {
        d.reject(err);
    });
    req.write(queryString);
    req.end();
    return d.promise;
}