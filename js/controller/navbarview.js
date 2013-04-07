define(['knockout', 'knockback', 'baseController'], function(ko, kb, BaseController) {
	var navLink = function(name, viewName, hashUrl) {
		this.name = ko.observable(name);
		this.hashUrl = ko.observable(hashUrl);
		this.isActive = ko.computed(function() {
			return window.applicationState.currentView() == viewName;

		}, this);
	}
	var view = BaseController.extend({
		viewName : "navbarview",
		onReady : function() {
			$(".main-content").css("padding-top", $(this.el).height());

			var viewModel = window.applicationState;

			ko.applyBindings(viewModel, this.el);

		},
		initialize : function() {
			this.inactiveLinks = {};
			this.inactiveLinks.homeLink = new navLink("Home", "home", "#home");
			this.inactiveLinks.aboutLink = new navLink("About", "about", "#about");
			this.inactiveLinks.signupLink = new navLink("Sign Up", "signup", "#signup");
			this.inactiveLinks.dashboardLink =new navLink("Dashboard", "dashboard", "#dashboard");
			this.inactiveLinks.configureLink =new navLink("Configure Email", "configuration", "#configuration");
			this.inactiveLinks.accountLink = new navLink("Account Settings", "account", "#account");
			this.inactiveLinks.logoutLink = new navLink("Logout", "logout", "#logout");
			
			
			window.applicationState.links.push(this.inactiveLinks.homeLink);
			window.applicationState.links.push(this.inactiveLinks.aboutLink);
			window.applicationState.links.push(this.inactiveLinks.signupLink);

			var self = this;
			$(this.el).ready(function() {
				self.on("domReady");
			});
			window.applicationState.isLoggedIn.subscribe(function(val) {
				if (val) {
					window.applicationState.links.remove(this.inactiveLinks.signupLink);
					
					window.applicationState.links.push(this.inactiveLinks.dashboardLink);
					window.applicationState.links.push(this.inactiveLinks.configureLink);
					window.applicationState.links.push(this.inactiveLinks.accountLink);
					window.applicationState.links.push(this.inactiveLinks.logoutLink);
				} else {
					window.applicationState.links.remove(this.inactiveLinks.dashboardLink);
					window.applicationState.links.remove(this.inactiveLinks.configureLink);
					window.applicationState.links.remove(this.inactiveLinks.accountLink);
					window.applicationState.links.remove(this.inactiveLinks.logoutLink);
					
					window.applicationState.links.push(this.inactiveLinks.signupLink);
				}

			}, this);

		}
	});

	return {
		init : function() {

			//get model
			var viewInstance = new view({
				el : $(".navbar")
			});
			viewInstance.render();

			return viewInstance;
		}
	}

});
