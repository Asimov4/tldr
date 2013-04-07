define(['knockout', 'knockback', 'baseController'], function(ko, kb, BaseController) {
	var view = BaseController.extend({
		viewName : "homeview",
		initialize : function() {

		}
	});

	return {
		init : function() {

			//get model
			var viewInstance = new view({
				el : $(".main-content")
			});
			viewInstance.render();
		}
	}

});
