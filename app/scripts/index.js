'use strict';

var objNotification = {
	alert: function(message, callback, title, button) {
		alert(message);
		if(typeof callback === 'function') callback();
	},
	confirm: function(message, callback, title, buttons) {
		var valor = confirm(message) ? 1 : 0;
		if(typeof callback === 'function') callback(valor);
	},
	prompt: function(message, callback, title, buttons) {
		var valor = prompt(message);
		if(typeof callback === 'function') callback(valor);
	}
};

var app = {
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		if (navigator.userAgent.match(/(iOS|iPhone|iPod|iPad|Android|BlackBerry)/)) {
			console.log('UA: Running in Cordova/PhoneGap');
			var app = this;
			document.addEventListener('deviceready', function () {
				app.bootstrapAngular();
			}, false);
		} else {
			console.log('UA: Running in browser');
			this.bootstrapAngular();
			this.bootstrapPlugins();
		}
	},

	bootstrapAngular: function() {
		var domElement = document.querySelector('body');
		angular.bootstrap(domElement, ['app']);
	},

	bootstrapPlugins: function() {
		if (!navigator.notification) {
			navigator.notification = objNotification;
		}
	}
};

app.initialize();
