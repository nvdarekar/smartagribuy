define(["underscore", 
"backbone", 
"marionette", 
"pesticides", 
"headerView",
"criteriaView",
"itemsView"], 
function(_, Backbone, Marionette, Pesticides, HeaderView, CriteriaView, ItemsView){
	var app = new Backbone.Marionette.Application();
	app.addRegions({
	      header : '#header',
	      criteria:"#criteria",
	      main   : '#main',
	});
	app.addInitializer(function(){

	var pesticideCollection = new pesticides();
	pesticideCollection.fetch();

	console.log(pesticideCollection)

	var headerView = new HeaderView()
	headerView.render();
	app.header.show(headerView);

	var criteriaView = new CriteriaView()
	criteriaView.render();
    app.criteria.show(criteriaView);

    var itemsView = new ItemsView({collection: pesticideCollection});
	itemsView.render();
	app.main.show(itemsView);

	});
	app.start()
	return app
});
