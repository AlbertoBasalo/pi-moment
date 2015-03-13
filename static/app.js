(function () {
	"use strict";

	angular
		.module('pi-moment', [])
		.controller("piCtrl", function ($rootScope) {
			var pi = this;
			pi.moment = new Date(2015, 3, 14, 9, 26, 53);
			var socket = io.connect();
			socket.on("time", function () {
				$rootScope.$apply(function () {
					pi.localTime = new Date();
					pi.delta = pi.moment.getTime() - pi.localTime.getTime();
					pi.diff = pi.moment - pi.localTime;
					pi.sign = pi.diff < 0 ? -1 : 1;
					pi.deltaSeconds = pi.delta / 1000;
					pi.progress = pi.deltaSeconds / (24*60*60);
				});
			});
		});
}());