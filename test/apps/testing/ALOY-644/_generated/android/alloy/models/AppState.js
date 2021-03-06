var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {
  config: {
    'defaults': {
      counter: 1,
      color: '#00f' } },


  extendCollection: function (Collection) {
    _.extend(Collection.prototype, {

      // For Backbone v1.1.2, uncomment this to override the fetch method
      /*
      fetch: function(options) {
      	options = options ? _.clone(options) : {};
      	options.reset = true;
      	return Backbone.Collection.prototype.fetch.call(this, options);
      },
      */});

    return Collection;
  } };


model = Alloy.M('appState',
exports.definition,
[]);


collection = Alloy.C('appState',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;