define(['knockout', 'knockback', 'baseController'], function(ko, kb, BaseController) {
	var logInModel = function() {
		this.username = ko.observable("");
		this.password = ko.observable("");
		this.passwordConfirm = ko.observable("");
		this.loggingIn = ko.observable(false);
		this.attemptSignIn = function() {
			window.applicationState.isLoggedIn(true);
			var deferredResponse = $.ajax({
				url : "http://ec2-54-245-33-80.us-west-2.compute.amazonaws.com/Project/signin?email=sprockow@gmail.com&password=foo",
				crossDomain : true,
				requestType : "jsonp",
				dataType : "jsonp"
			});

			window.app_router.navigate("dashboard", {
				trigger : true,
				replace : true
			});

		};
	};

	var view = BaseController.extend({
		viewName : "signupview",
		initialize : function() {
			this.viewModel = new logInModel();

		},
		onReady : function() {
			ko.applyBindings(this.viewModel, this.el);
		}
	});

	return {

		init : function() {
			//get model
			var viewInstance = new view({
				el : $(".main-content")
			});
			viewInstance.render();

			return viewInstance;
		}
	}

});
