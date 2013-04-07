// Filename: router.js
define(['jquery', 'underscore', 'backbone', 'knockout'], function($, _, Backbone, ko) {
	var AppRouter = Backbone.Router.extend({
		routes : {

			// Define some URL routes
			'home' : 'onHome',
			'signup' : 'onSignup',
			'about' : 'onAbout',
			//not yet implemented
			'configuration' : 'onConfiguration',
			'dashboard' : 'onDashbaord',
			'account' : 'onAccount',
			'logout' : 'onLogout',
			// Default
			'*actions' : 'onHome'
		},
		initialize : function() {
			window.applicationState = {};
			window.applicationState.currentView = ko.observable("home");
			window.applicationState.isLoggedIn = ko.observable(false);
			window.applicationState.links = ko.observableArray([]);

			require(['js/controller/navbarview.js'], function(view) {
				view.init();
			});
		},
		onHome : function() {
			window.app_router.navigate("home", {
				trigger : false,
				replace : true
			});
			window.applicationState.currentView("home");
			require(['js/controller/homeview.js'], function(view) {
				view.init();
			});
		},
		onSignup : function() {
			window.applicationState.currentView("signup");
			require(['js/controller/signupview.js'], function(view) {
				view.init();
			});
		},
		onAbout : function() {
			window.applicationState.currentView("about");
			require(['js/controller/aboutController.js'], function(view) {
				view.init();
			});
		},
		onConfiguration : function() {
			window.applicationState.currentView("configuration");
			require(['js/controller/configurationController.js'], function(view) {
				view.init();
			});
		},
		onDashbaord : function() {
			window.applicationState.currentView("dashboard");
			require(['js/controller/dashboardController.js'], function(view) {
				view.init();
			});
		},
		onLogout : function() {
			window.applicationState.currentView("logout");
			require(['js/controller/logoutController.js'], function(view) {
				view.init();
			});
		},
		onAccount : function() {
			window.applicationState.currentView("account");
			require(['js/controller/accountController.js'], function(view) {
				view.init();
			});
		}
	});

	var initialize = function() {
		window.app_router = new AppRouter();
		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
});
