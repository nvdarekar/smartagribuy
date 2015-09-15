define(["jquery", 
"underscore", 
"backbone", 
"marionette", 
"text!../templates/header-template.html",
], function($, _, Backbone, Marionette, headerTemplate){
	headerView = Marionette.ItemView.extend({
		template: headerTemplate,
	});	
	return headerView
});
