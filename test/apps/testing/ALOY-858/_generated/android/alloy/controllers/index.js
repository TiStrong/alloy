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


  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createLabel(
  { top: "30dp", color: "#222", font: { fontSize: "12dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, left: 20, textid: "hello_world" });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createLabel(
  { top: "30dp", color: "#222", font: { fontSize: "12dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, left: 20, textid: "mytheme__hello_world" });

  $.__views["index"].add($.__views["__alloyId1"]);
  $.__views["__alloyId2"] = Ti.UI.createImageView(
  { image: "/images/a.png" });

  $.__views["index"].add($.__views["__alloyId2"]);
  $.__views["widget_random"] = Alloy.createWidget('com.random.widget', 'widget', { id: "widget_random", __parentSymbol: $.__views["index"] });
  $.__views["widget_random"].setParent($.__views["index"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;