define(["jquery", 
"underscore", 
"backbone", 
"marionette", 
"itemView",
"bootstrap",
], function($, _, Backbone, Marionette, ItemView){
	itemsView = Marionette.CollectionView.extend({
		childView: ItemView,
		className:"item-container"
 		//tagName: 'div'
	});
	return itemsView
});