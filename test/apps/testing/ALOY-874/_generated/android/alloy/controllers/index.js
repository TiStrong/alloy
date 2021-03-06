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
  $.test = Alloy.createCollection('test');

  // <dataFunctions>
  var __alloyId13 = Alloy.Collections['$.test'] || $.test;function __alloyId14(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId14.opts || {};var models = __alloyId13.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId10 = models[i];__alloyId10.__transform = _.isFunction(__alloyId10.transform) ? __alloyId10.transform() : __alloyId10.toJSON();var __alloyId12 = Ti.UI.createTableViewRow(
      { title: __alloyId10.__transform.title });

      rows.push(__alloyId12);
    }$.__views["__alloyId3"].setData(rows);};__alloyId13.on('fetch destroy change add remove reset', __alloyId14);var __alloyId29 = Alloy.Collections['$.test'] || $.test;function __alloyId30(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId30.opts || {};var models = __alloyId29.models;var len = models.length;var __alloyId19 = [];for (var i = 0; i < len; i++) {var __alloyId26 = models[i];__alloyId26.__transform = _.isFunction(__alloyId26.transform) ? __alloyId26.transform() : __alloyId26.toJSON();var __alloyId28 = { properties: { title: __alloyId26.__transform.title } };__alloyId19.push(__alloyId28);}opts.animation ? $.__views["__alloyId18"].setItems(__alloyId19, opts.animation) : $.__views["__alloyId18"].setItems(__alloyId19);};__alloyId29.on('fetch destroy change add remove reset', __alloyId30);
  // </dataFunctionsCode>

  // Generated UI code
  var __alloyId0 = [];$.__views["__alloyId2"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, title: "table" });

  $.__views["__alloyId5"] = Ti.UI.createView(
  { height: 60 });

  $.__views["__alloyId6"] = Ti.UI.createLabel(
  { text: 'Header' });

  $.__views["__alloyId5"].add($.__views["__alloyId6"]);
  $.__views["__alloyId8"] = Ti.UI.createView(
  { height: 60 });

  $.__views["__alloyId9"] = Ti.UI.createLabel(
  { text: 'Footer' });

  $.__views["__alloyId8"].add($.__views["__alloyId9"]);
  $.__views["__alloyId3"] = Ti.UI.createTableView(
  { headerView: $.__views["__alloyId5"], footerView: $.__views["__alloyId8"] });

  $.__views["__alloyId2"].add($.__views["__alloyId3"]);
  $.__views["__alloyId1"] = Ti.UI.createTab(
  { window: $.__views["__alloyId2"], title: "table" });

  __alloyId0.push($.__views["__alloyId1"]);$.__views["__alloyId16"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, title: "list" });

  $.__views["__alloyId21"] = Ti.UI.createView(
  { height: 60 });

  $.__views["__alloyId22"] = Ti.UI.createLabel(
  { text: 'Header' });

  $.__views["__alloyId21"].add($.__views["__alloyId22"]);
  $.__views["__alloyId24"] = Ti.UI.createView(
  { height: 60 });

  $.__views["__alloyId25"] = Ti.UI.createLabel(
  { text: 'Footer' });

  $.__views["__alloyId24"].add($.__views["__alloyId25"]);
  $.__views["__alloyId18"] = Ti.UI.createListSection(
  { headerView: $.__views["__alloyId21"], footerView: $.__views["__alloyId24"] });

  var __alloyId31 = [];__alloyId31.push($.__views["__alloyId18"]);$.__views["__alloyId17"] = Ti.UI.createListView(
  { sections: __alloyId31 });

  $.__views["__alloyId16"].add($.__views["__alloyId17"]);
  $.__views["__alloyId15"] = Ti.UI.createTab(
  { window: $.__views["__alloyId16"], title: "list" });

  __alloyId0.push($.__views["__alloyId15"]);$.__views["index"] = Ti.UI.createTabGroup(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, tabs: __alloyId0, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {__alloyId13 && __alloyId13.off('fetch destroy change add remove reset', __alloyId14);__alloyId29 && __alloyId29.off('fetch destroy change add remove reset', __alloyId30);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  $.test.add({
    title: 'this is my row' });

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;