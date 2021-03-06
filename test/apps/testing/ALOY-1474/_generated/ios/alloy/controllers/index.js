var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.
  Alloy.Models.instance('transformless');Alloy.Models.instance('transformer');Alloy.Collections.instance('transformless');Alloy.Collections.instance('transformer');

  // <dataFunctions>
  var __alloyId19 = Alloy.Collections['transformless'] || transformless;function __alloyId20(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId20.opts || {};var models = __alloyId19.models;var len = models.length;var __alloyId17 = [];for (var i = 0; i < len; i++) {var __alloyId16 = models[i];__alloyId16.__transform = _.isFunction(__alloyId16.transform) ? __alloyId16.transform() : __alloyId16.toJSON();var __alloyId18 = { title: __alloyId16.__transform.foo };
      __alloyId17.push(__alloyId18);
      __alloyId14.push(__alloyId18);}$.__views["__alloyId12"].labels = __alloyId17;};__alloyId19.on('fetch destroy change add remove reset', __alloyId20);var __alloyId28 = Alloy.Collections['transformless'] || transformless;function __alloyId29(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId29.opts || {};var models = __alloyId28.models;var len = models.length;var __alloyId26 = [];for (var i = 0; i < len; i++) {var __alloyId25 = models[i];__alloyId25.__transform = _.isFunction(__alloyId25.transform) ? __alloyId25.transform() : __alloyId25.toJSON();var __alloyId27 = { title: __alloyId25.__transform.foo + ' and ' + __alloyId25.__transform.bar };
      __alloyId26.push(__alloyId27);
      __alloyId23.push(__alloyId27);}$.__views["__alloyId21"].labels = __alloyId26;};__alloyId28.on('fetch destroy change add remove reset', __alloyId29);var __alloyId37 = Alloy.Collections['transformless'] || transformless;function __alloyId38(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId38.opts || {};var models = __alloyId37.models;var len = models.length;var __alloyId35 = [];for (var i = 0; i < len; i++) {var __alloyId34 = models[i];__alloyId34.__transform = myTransformer(__alloyId34);var __alloyId36 = { title: __alloyId34.__transform.foo + ' and ' + __alloyId34.__transform.bar };
      __alloyId35.push(__alloyId36);
      __alloyId32.push(__alloyId36);}$.__views["__alloyId30"].labels = __alloyId35;};__alloyId37.on('fetch destroy change add remove reset', __alloyId38);var __alloyId46 = Alloy.Collections['transformer'] || transformer;function __alloyId47(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId47.opts || {};var models = __alloyId46.models;var len = models.length;var __alloyId44 = [];for (var i = 0; i < len; i++) {var __alloyId43 = models[i];__alloyId43.__transform = _.isFunction(__alloyId43.transform) ? __alloyId43.transform() : __alloyId43.toJSON();var __alloyId45 = { title: __alloyId43.__transform.foo };
      __alloyId44.push(__alloyId45);
      __alloyId41.push(__alloyId45);}$.__views["__alloyId39"].labels = __alloyId44;};__alloyId46.on('fetch destroy change add remove reset', __alloyId47);var __alloyId55 = Alloy.Collections['transformer'] || transformer;function __alloyId56(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId56.opts || {};var models = __alloyId55.models;var len = models.length;var __alloyId53 = [];for (var i = 0; i < len; i++) {var __alloyId52 = models[i];__alloyId52.__transform = _.isFunction(__alloyId52.transform) ? __alloyId52.transform() : __alloyId52.toJSON();var __alloyId54 = { title: __alloyId52.__transform.foo + ' and ' + __alloyId52.__transform.bar };
      __alloyId53.push(__alloyId54);
      __alloyId50.push(__alloyId54);}$.__views["__alloyId48"].labels = __alloyId53;};__alloyId55.on('fetch destroy change add remove reset', __alloyId56);var __alloyId64 = Alloy.Collections['transformer'] || transformer;function __alloyId65(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId65.opts || {};var models = __alloyId64.models;var len = models.length;var __alloyId62 = [];for (var i = 0; i < len; i++) {var __alloyId61 = models[i];__alloyId61.__transform = myTransformer(__alloyId61);var __alloyId63 = { title: __alloyId61.__transform.foo + ' and ' + __alloyId61.__transform.bar };
      __alloyId62.push(__alloyId63);
      __alloyId59.push(__alloyId63);}$.__views["__alloyId57"].labels = __alloyId62;};__alloyId64.on('fetch destroy change add remove reset', __alloyId65);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId8"] = Ti.UI.createLabel(
  { top: 30 });

  $.__views["index"].add($.__views["__alloyId8"]);
  $.__views["__alloyId9"] = Ti.UI.createLabel(
  {});

  $.__views["index"].add($.__views["__alloyId9"]);
  $.__views["__alloyId10"] = Ti.UI.createLabel(
  {});

  $.__views["index"].add($.__views["__alloyId10"]);
  $.__views["__alloyId11"] = Ti.UI.createLabel(
  {});

  $.__views["index"].add($.__views["__alloyId11"]);
  var __alloyId14 = [];$.__views["__alloyId12"] = Ti.UI.createButtonBar(
  { labels: __alloyId14 });

  $.__views["index"].add($.__views["__alloyId12"]);
  var __alloyId23 = [];$.__views["__alloyId21"] = Ti.UI.createButtonBar(
  { labels: __alloyId23 });

  $.__views["index"].add($.__views["__alloyId21"]);
  var __alloyId32 = [];$.__views["__alloyId30"] = Ti.UI.createButtonBar(
  { labels: __alloyId32 });

  $.__views["index"].add($.__views["__alloyId30"]);
  var __alloyId41 = [];$.__views["__alloyId39"] = Ti.UI.createButtonBar(
  { labels: __alloyId41 });

  $.__views["index"].add($.__views["__alloyId39"]);
  var __alloyId50 = [];$.__views["__alloyId48"] = Ti.UI.createButtonBar(
  { labels: __alloyId50 });

  $.__views["index"].add($.__views["__alloyId48"]);
  var __alloyId59 = [];$.__views["__alloyId57"] = Ti.UI.createButtonBar(
  { labels: __alloyId59 });

  $.__views["index"].add($.__views["__alloyId57"]);
  this.__alloyId66 = function () {
    Alloy['Models']['transformless'].__transform = _.isFunction(Alloy['Models']['transformless'].transform) ? Alloy['Models']['transformless'].transform() : Alloy['Models']['transformless'].toJSON();this.__alloyId8.text = Alloy['Models']['transformless']['__transform']['foo'];
    this.__alloyId9.text = Alloy['Models']['transformless']['__transform']['foo'] + ' and ' + Alloy['Models']['transformless']['__transform']['bar'];
  }.bind(this);
  Alloy['Models']['transformless'].on('fetch change destroy', this.__alloyId66);this.__alloyId67 = function () {
    Alloy['Models']['transformer'].__transform = _.isFunction(Alloy['Models']['transformer'].transform) ? Alloy['Models']['transformer'].transform() : Alloy['Models']['transformer'].toJSON();this.__alloyId10.text = Alloy['Models']['transformer']['__transform']['foo'];
    this.__alloyId11.text = Alloy['Models']['transformer']['__transform']['foo'] + ' and ' + Alloy['Models']['transformer']['__transform']['bar'];
  }.bind(this);
  Alloy['Models']['transformer'].on('fetch change destroy', this.__alloyId67);exports.destroy = function () {__alloyId19 && __alloyId19.off('fetch destroy change add remove reset', __alloyId20);__alloyId28 && __alloyId28.off('fetch destroy change add remove reset', __alloyId29);__alloyId37 && __alloyId37.off('fetch destroy change add remove reset', __alloyId38);__alloyId46 && __alloyId46.off('fetch destroy change add remove reset', __alloyId47);__alloyId55 && __alloyId55.off('fetch destroy change add remove reset', __alloyId56);__alloyId64 && __alloyId64.off('fetch destroy change add remove reset', __alloyId65);Alloy['Models']['transformless'] && Alloy['Models']['transformless'].off('fetch change destroy', this.__alloyId66);Alloy['Models']['transformer'] && Alloy['Models']['transformer'].off('fetch change destroy', this.__alloyId67);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Alloy.Models.transformless.set({
    foo: 'FOO',
    bar: 'BAR' });


  Alloy.Models.transformer.set({
    foo: 'FOO',
    bar: 'BAR' });


  Alloy.Collections.transformless.reset([{
    foo: '1 FOO',
    bar: '1 BAR' },
  {
    foo: '2 FOO',
    bar: '2 BAR' }]);


  Alloy.Collections.transformer.reset([{
    foo: '1 FOO',
    bar: '1 BAR' },
  {
    foo: '2 FOO',
    bar: '2 BAR' }]);


  $.index.open();

  function myTransformer(model) {
    var transformed = model.toJSON();

    transformed.foo = transformed.foo + 'D';
    transformed.bar = transformed.bar + 'T';

    return transformed;
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;