define(['knockout', 'knockback'], function(ko, kb) {

	var viewOptions = {
		events : {
			"domReady" : "onReady",
		},
		onReady : function() {

		},
		initialize : function() {
			var self = this;
			$(this.el).ready(function() {
				self.on("domReady");
			});

		},
		render : function() {
			var self = this;

			$(this.el).load(window.app.viewFolder + "/"+ this.viewName +".html", function() {
				self.onReady("domReady");
			});
		}
	};

	var view = Backbone.View.extend(viewOptions);

	return {
		extend : function(options) {
			options = options || {};

			if (options.events) {
				options.events = _.extend(viewOptions.events, options.events);
			}
			options._super = view;

			return view.extend(options);
		}
	}

});
