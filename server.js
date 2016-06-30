const http = require("http");
const url  = require("url");
/*
createServer (req, res) : return an object that have listen method

listen(PORT)
*/
function start() {
  function onRequest(request, response) {
    const pathName = url.parse(request.url).pathname ;
    console.log(`Request for ${ pathName } received!`);
    response.writeHead( 200, {"Content-Type": "text/plain"} );
    response.write("Hello World !");
    response.end();
  }

  http.createServer( onRequest ).listen( 8888 );
  console.log("Server has started !");
}

// export { start as fire };
exports.fire = start;
