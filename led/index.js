var wpi = require('wiring-pi');

var express = require('express');
var app = express();

wpi.wiringPiSetup();
var pin = 7;
wpi.pinMode(pin, wpi.OUTPUT);
var handler;
var flashing = false;
// get the status of the light
app.get('/status', function(req, res){
    res.send(''+ flashing);
});
// turn on the light
app.get('/on', function (req, res) {
    flashing = true;
    wpi.digitalWrite(pin, 1);
    res.send('on');
});
// turn off the light
app.get('/off', function(req, res){
    flashing = false;
    wpi.digitalWrite(pin, 0);
    res.send('off');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});

