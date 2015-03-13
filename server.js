(function () {
	"use strict";

	var express = require('express');
	var app = express();
	app.use(express.static(__dirname + '/static'));

	var server = require('http').Server(app);
	var io = require('socket.io')(server);

	setInterval(function () {
		io.sockets.emit('time', { time: new Date() });
	}, 1000);
	var port = process.env.PORT || 3000;
	server.listen(port);
}());
