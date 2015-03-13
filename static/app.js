(function () {
	"use strict";

	angular
		.module('pi-moment', [])
		.controller("piCtrl", function ($rootScope) {
			var pi = this;
			pi.moment = new Date(2015, 2, 14, 9, 26, 53);
			var socket = io.connect();
			socket.on("time", function () {
				$rootScope.$apply(function () {
					pi.localTime = new Date();
					if ((pi.moment - pi.localTime) >= 0) {
						pi.delta = pi.moment.getTime() - pi.localTime.getTime();
					} else {
						pi.delta = pi.localTime.getTime() - pi.moment.getTime();
					}
					pi.deltaSeconds = pi.delta / 1000;
					pi.progress = pi.deltaSeconds / (24 * 60 * 60);
				});
			});
		});
}());