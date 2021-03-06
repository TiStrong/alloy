var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {
  config: {
    'columns': {
      'item': 'text',
      'done': 'integer',
      'date_completed': 'text' },

    'adapter': {
      'type': 'sql',
      'collection_name': 'todo' } },


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



model = Alloy.M('todo',
exports.definition,
[]);


collection = Alloy.C('todo',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;