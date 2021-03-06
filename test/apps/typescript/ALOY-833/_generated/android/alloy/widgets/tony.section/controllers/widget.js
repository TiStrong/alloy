var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'tony.section/' + s :
  s.substring(0, index) + '/tony.section/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/widget'))('tony.section');this.__widgetId = 'tony.section';
  require('/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'widget';
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


  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["widget"] = Ti.UI.createTableViewSection(
  { id: "widget" });

  $.__views["__alloyId0"] = Ti.UI.createTableViewRow(
  { title: "row 1" });

  $.__views["widget"].add($.__views["__alloyId0"]);$.__views["__alloyId1"] = Ti.UI.createTableViewRow(
  { title: "row 2" });

  $.__views["widget"].add($.__views["__alloyId1"]);$.__views["__alloyId2"] = Ti.UI.createTableViewRow(
  { title: "row 3" });

  $.__views["widget"].add($.__views["__alloyId2"]);$.__views["__alloyId3"] = Ti.UI.createTableViewRow(
  { title: "row 4" });

  $.__views["widget"].add($.__views["__alloyId3"]);$.__views["__alloyId4"] = Ti.UI.createTableViewRow(
  { title: "row 5" });

  $.__views["widget"].add($.__views["__alloyId4"]);$.__views["widget"] && $.addTopLevelView($.__views["widget"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file


  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;