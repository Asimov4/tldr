define(['knockout', 'knockback', 'baseController'], function(ko, kb, baseController) {

	var view = baseController.extend({
		viewName: "aboutview"
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
