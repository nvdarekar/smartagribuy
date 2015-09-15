define(["jquery", 
"underscore", 
"backbone", 
"marionette", 
"text!../templates/criteria-template.html",
"bootstrap",
"async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"
], function($, _, Backbone, Marionette, criteriaTemplate){
	criteriaView = Marionette.ItemView.extend({
		template: criteriaTemplate,
		onBeforeRender: function(){
			console.log('onbeforeRender');
		},
		onShow: function() {
			var autocomplete;
            autocomplete = new google.maps.places.Autocomplete((document.getElementById('location')),
 			{ types: ['geocode'] });
            google.maps.event.addListener(autocomplete, 'place_changed', function() {});
		}
	});
	return criteriaView
});
