var express = require('express'),
    app = express(),
    port = 3700;

//Link Jade Templates
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

app.get("/", function(req, res){
    res.render("default_page");
});

app.listen(port);
console.log("fired up, listening on port: " + port);
