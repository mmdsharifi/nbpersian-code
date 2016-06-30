const http   = require("http");
const url    = require("url");


function start(router, handle) {
  function onRequest(request, response) {
    var postData = '';
    const pathName = url.parse(request.url).pathname ;
    console.log(`Request for ${ pathName } received!`);

    router(handle, pathName, response, request);
  }

  http.createServer( onRequest ).listen( 8888 );
  console.log("Server has started !");
}

// export { start as fire };
exports.fire = start;
