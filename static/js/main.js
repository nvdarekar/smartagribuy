(function() {
	"use strict";
    	require.config({
		baseUrl: 'static/js/lib',
		shim: {
			'underscore': {
				exports: "_"
			},
			'backbone': {
				deps: ['underscore', 'jquery'],
		        
		    },
			'marionette': {
		        	deps: ['backbone'],
		        	exports: 'Backbone.Marionette'
		    },
		    "bootstrap": {
            	deps: ["jquery"],
            	exports:"bootstrap"
        	}
		},
		paths: {
		    app:"../app",
			pesticides:"../collections/pesticides",
			criteriaView:"../views/criteria-view",
			headerView:"../views/header-view",
			itemView:"../views/item-view",
			itemsView:"../views/items-view",

		}

	});
	require(["app"], function(app) {
	
	});

})();
