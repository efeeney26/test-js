const staticNode = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
const file = new staticNode.Server('./index.html');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);
