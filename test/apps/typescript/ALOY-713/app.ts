import * as Alloy from 'alloy';
import * as Backbone from 'backbone';
import index from '/controllers/index';

var feed = Alloy.Collections.feed = new Backbone.Collection();
feed.reset([
	new Backbone.Model({first:'first', second:'second', third:'third', fourth:'fourth'}),
	new Backbone.Model({first:'first', second:'second', third:'third', fourth:'fourth'}),
	new Backbone.Model({first:'first', second:'second', third:'third', fourth:'fourth'}),
	new Backbone.Model({first:'first', second:'second', third:'third', fourth:'fourth'}),
	new Backbone.Model({first:'first', second:'second', third:'third', fourth:'fourth'})
]);

new index();
