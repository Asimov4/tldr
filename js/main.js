requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl : 'js',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths : {
		jquery : 'vendor/jquery-1.9.1.min',
		knockoutCore : 'vendor/knockout-2.2.1',
		knockoutValidation: 'vendor/knockout.validation',
		knockout: 'knockoutComplete',
		underscore : 'vendor/underscore',
		knockback : 'vendor/knockback',
		bootstrap : 'vendor/bootstrap',
		backbone : 'vendor/backbone',
		knockoutBootstrap : 'vendor/knockout-bootstrap',
		router : 'router',
		baseController: 'controller/baseController'
	},
	shim : {
		'jquery' : {
			exports : '$'
		},
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		}
	}
});

// Start the main app logic.
requirejs(['jquery', 'knockout', 'backbone', 'router'], function($, ko, Backbone, Router) {
	window.app = {};
	window.app.viewFolder = "templates/views";
	Router.initialize();
});
