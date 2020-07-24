
var express = require('express');
var http = require('http');
var app = express();
var httpServer = http.createServer(app);
httpServer.listen(3000, function(){ console.log("Listening on port 3000");
});

// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

app.use(express.static('src'));
res.sendFile('index.html', { root: __dirname
}); 