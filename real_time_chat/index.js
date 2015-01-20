var express = require('express'),
    app = express(),
    port = 3700;

app.get("/", function(request, response){
  response.send("UP AND RUNNING");
});

app.listen(port);
console.log("fired up, listening on port: " + port);
