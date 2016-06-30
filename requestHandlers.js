const exec        = require('child_process').exec;
const queryString = require('querystring');
const fs          = require('fs');
const formidable  = require('formidable');

function start(response) {
  console.log(`Request handler for 'start' called !`);
    const body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Upload Image</title>
      </head>
      <body>
        <form action="/upload" method="post" encode="multipart/form-data">
          <input type="file" name="upload">
          <input type="submit" value="Upload Image">
        </form>
      </body>
    </html>
    `
    response.writeHead( 200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
  return 'hello start';
}
function upload(response, request) {
  console.log(`Request handler for 'upload' called !`);
  const form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse( request, (error, fields, files) => {
    console.log('parsing done!');
    /* possiable error on Windows Systems ...*/
    // fs.rename(files.upload.path, '/tmp/test.png', (err) => {
    //   if (err) {
    //     fs.unlink('tmp/test.png');
    //     fs.rename( files.upload.path, '/tmp/test.png')
    //   }
    //});
    response.writeHead( 200, { "Content-Type": "text/html" });
    response.write(`received image <br>
                    <img src='/show' />
    `);
    response.end();
  });
}

function show(response) {
  console.log(`Request handler for 'show' called !`);
  response.writeHead( 200 , { "Content-Type": "image/png" });
  fs.createReadStream("tmp/test.png").pipe(response);
}

exports.start  = start;
exports.upload = upload;
exports.show   = show;
