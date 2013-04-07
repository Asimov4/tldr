define(['knockoutCore', 'underscore'], function(ko, _) {
		
	window.ko = ko;
	
	require(['knockoutValidation', 'knockoutWijmo']);

	return ko;
});
