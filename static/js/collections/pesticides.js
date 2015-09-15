define(["underscore", "backbone", "marionette"], function(_, Backbone, Marionette){
	pesticide = Backbone.Model.extend({
		default:{
			"pestName":"",
			"packingSize":"",
			"sellarName":"",
			"contact":"",
			"price":"",
			"location":"",
			"distanceFromYou":""
		}		
	});
	pesticides = Backbone.Collection.extend({
		model:pesticide,
		url: '/pesticides',
		success:function(){
			console.log("success")
		}
		
	});
	return pesticides;
});
