var fs = require('fs');
var path = require('path');
var util = require('util');
var express = require('express');
var app = express();

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        info.type = "file";
    }

    return info;
}

app.use(express.static(__dirname + '/'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));

app.get('/list-galleries', function(req, res) {
  res.json(dirTree(__dirname + '/gallery'));
});

app.listen(process.env.PORT || 80);
