(function () {
	"use strict";

	angular
		.module('pi-moment', [])
		.controller("piCtrl", function ($rootScope) {
			var pi = this;
			var secsPerDay = 24 * 60 * 60 ;
			pi.moment = new Date(2015, 2, 14, 9, 26, 53);
			var socket = io.connect();
			socket.on("time", function () {
				$rootScope.$apply(function () {
					pi.localTime = new Date();
					pi.delta = Math.abs(pi.moment.getTime() - pi.localTime.getTime()) ;
					pi.deltaSeconds = pi.delta /1000 ;
					pi.progress = 100 * (secsPerDay - pi.deltaSeconds) / secsPerDay ;
				});
			});
		});
}());
