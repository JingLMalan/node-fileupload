var formidable = require('formidable'),
    http = require('http');
const fs = require('fs');
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname;
    form.parse(req, function(err, fields, files) {
      fs.rename(`${files.upload.path}`, `${__dirname}/a.txt`, function (err) {
        if (err) throw err;
        fs.readFile('./upload.html', function(err, data) {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
          }  
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
        });
      });
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);