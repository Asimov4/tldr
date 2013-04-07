define(['knockout', 'knockback', 'baseController', 'wijmo'], function(ko, kb, baseController, wijmo) {

	debugger;
	var view = baseController.extend({
		viewName : "dashboardview",
		onReady : function() {
			$("#wijcompositechart").wijcompositechart({
				axis : {
					y : {
						text : "Total Hardware"
					},
					x : {
						text : ""
					}
				},
				stacked : false,
				hint : {
					content : function() {
						return this.label + '\n ' + this.y + '';
					}
				},
				header : {
					text : "Hardware Distribution"
				},
				seriesList : [{
					type : "column",
					label : "West",
					legendEntry : true,
					data : {
						x : ['Desktops', 'Notebooks', 'AIO', 'Tablets', 'Phones'],
						y : [5, 3, 4, 7, 2]
					}
				}, {
					type : "column",
					label : "Central",
					legendEntry : true,
					data : {
						x : ['Desktops', 'Notebooks', 'AIO', 'Tablets', 'Phones'],
						y : [2, 2, 3, 2, 1]
					}
				}, {
					type : "column",
					label : "East",
					legendEntry : true,
					data : {
						x : ['Desktops', 'Notebooks', 'AIO', 'Tablets', 'Phones'],
						y : [3, 4, 4, 2, 5]
					}
				}, {
					type : "pie",
					label : "asdfdsfdsf",
					legendEntry : true,
					center : {
						x : 150,
						y : 150
					},
					radius : 60,
					data : [{
						label : "MacBook Pro",
						legendEntry : true,
						data : 46.78,
						offset : 15
					}, {
						label : "iMac",
						legendEntry : true,
						data : 23.18,
						offset : 0
					}, {
						label : "MacBook",
						legendEntry : true,
						data : 20.25,
						offset : 0
					}]
				}, {
					type : "line",
					label : "Steam1",
					legendEntry : true,
					data : {
						x : ['Desktops', 'Notebooks', 'AIO', 'Tablets', 'Phones'],
						y : [3, 6, 2, 9, 5]
					},
					markers : {
						visible : true,
						type : "circle"
					}
				}, {
					type : "line",
					label : "Steam2",
					legendEntry : true,
					data : {
						x : ['Desktops', 'Notebooks', 'AIO', 'Tablets', 'Phones'],
						y : [1, 3, 4, 7, 2]
					},
					markers : {
						visible : true,
						type : "tri"
					}
				}]
			});
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
