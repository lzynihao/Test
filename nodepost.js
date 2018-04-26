var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title> Node.js </title></head>' +
    '<body>' +
    '<form method="post">' +
    'WEB： <input name="name"><br>' +
    'URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer(function(req, res) {
    var body = "";
    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
        body = querystring.parse(body);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if (body.name && body.url) {
            res.write('web:' + body.name);
            res.write('<br>');
            res.write('url' + body.url);
        } else {
            res.write(postHTML);
        }
    });
}).listen(3000);