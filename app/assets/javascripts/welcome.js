$(document).ready(function() {

	//model
	Screencast = Backbone.Model.extend({
		url : function(){
			return "/videos/" + this.get('id') + ".json";
		}});
	

	//collection
	var Screencasts = Backbone.Collection.extend({
		model: Screencast
	});
	var screencasts = new Screencasts();
	screencasts.url = '/videos.json' ;
	screencasts.fetch({
		success : function(){
			scrincasts_view = new ScreencastsView({});
			_.each(screencasts.models, function(model){
				scrincasts_view.addOne(model);	
			});
		}
	});


	//view collection
	var ScreencastsView = Backbone.View.extend({
		el : "#screencasts",
		addOne : function(model) {
			view = new ScreencastView({model :model});
			if(model.get('watched') == true) {
				$(view.el).addClass('watched');
			}
			var img = $('<img/>').attr({'src' : model.get('image')});
			$(view.el).append(img);
			$('ul.screencasts').append(view.render());	
		}
	});

	//view model
	var ScreencastView = Backbone.View.extend({
		tagName: "li",
		events : {
			"click" : "toggleWathed"

		},
		toggleWathed : function() {
			$(this.el).toggleClass('watched');

		},
		render : function() {
			return $(this.el).text(this.model.get('title'));
		}
	});

});