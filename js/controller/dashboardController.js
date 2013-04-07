define(['knockout', 'knockback', 'baseController', 'wijmo', 'bootstrap'], function(ko, kb, baseController, wijmo) {

	var view = baseController.extend({
		viewName : "dashboardview",
		onReady : function() {
			$("#configureInfoViz").alert();
			this.viewModel = {};
			
			this.viewModel.averageResponseTimeData = {
                axis: {
                    y: {
                        text: "Percentage"
                    },
                    x: {
                        text: "Hours"
                    }
                },
                hint: {
                    content: function () {
                        return this.data.label + '\n ' + this.y + '';
                    }
                },
                header: {
                    text: "Average Response Time"
                },
                seriesList: [{
                	label: 'work',
                    legendEntry: false,
                    data: { x: ['<1', '1-2', '2-4', '4-8', '>8'], y: [20, 20, 10, 30, 20] }
                }],
                seriesStyles: [{
                    fill: "#8ede43", stroke: "#7fc73c", opacity: 0.8
                }],
                seriesHoverStyles: [{
                    "stroke-width": "1.5", opacity: 1
                }]
            };
            
            this.viewModel.averageEmailLength = {
                axis: {
                    y: {
                        text: "Percentage"
                    },
                    x: {
                        text: "Characters"
                    }
                },
                hint: {
                    content: function () {
                        return this.data.label + '\n ' + this.y + '';
                    }
                },
                header: {
                    text: "Average Email Length"
                },
                seriesList: [{
                	label: 'work',
                    legendEntry: false,
                    data: { x: ['<100', '100-200', '200-400', '400-800', '>800'], y: [20, 20, 10, 30, 20] }
                }],
                seriesStyles: [{
                    fill: "#8ede43", stroke: "#7fc73c", opacity: 0.8
                }],
                seriesHoverStyles: [{
                    "stroke-width": "1.5", opacity: 1
                }]
            };
            
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
