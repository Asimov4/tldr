define(['knockout', 'knockback', 'baseController'], function(ko, kb, baseController) {

	var configurationMode = function() {
		this.customReply = ko.observable("Woah. You're email is really long. Could you please summarize this in fewer words? I'll read it later.");
		this.templateName = ko.observable("Polite but firm rejection");
		this.richFormatting = ko.observable(true);
		this.showCreator = ko.observable(false);
		this.openTemplateCreator = function() {
			this.showCreator(true);
		}
		this.createNewTemplate = function() {
			
		};
		this.cancelTemplate = function() {
			
		};
	}

	var view = baseController.extend({
		viewName: "configurationview",
		onReady: function() {
			this.viewModel = new configurationMode();
			
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
