/**
 * Alloy for Titanium by Appcelerator
 * This is generated code, DO NOT MODIFY - changes will be lost!
 * Copyright (c) 2012 by Appcelerator, Inc.
 */
var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;

Alloy.Models.appState = new Backbone.Model({
  counter: 1,
  color: '#00f' });


Alloy.Collections.heroes = new Backbone.Collection();
Alloy.Collections.heroes.reset([
{ name: 'Ironman', title: 'Ironman' },
{ name: 'Superman', title: 'Superman' },
{ name: 'Thor', title: 'Thor' },
{ name: 'Captain America', title: 'Captain America' },
{ name: 'Hulk', title: 'Hulk' },
{ name: 'Green Lantern', title: 'Green Lantern' },
{ name: 'Punisher', title: 'Punisher' },
{ name: 'Spiderman', title: 'Spiderman' },
{ name: 'Wolverine', title: 'Wolverine' },
{ name: 'Cyclops', title: 'Cyclops' }]);


Alloy.createController('index');
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/app.js.map