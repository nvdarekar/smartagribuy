define(["jquery", 
"underscore", 
"backbone", 
"marionette", 
"text!../templates/item-template.html",
"bootstrap",
], function($, _, Backbone, Marionette, itemTemplate){
	itemView = Marionette.ItemView.extend({
		template:_.template(itemTemplate),
		
	});

	return itemView
});