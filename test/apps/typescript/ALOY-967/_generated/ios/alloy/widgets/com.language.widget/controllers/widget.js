var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.language.widget/' + s :
  s.substring(0, index) + '/com.language.widget/' + s.substring(index + 1);

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
  var Widget = new (require('/widget'))('com.language.widget');this.__widgetId = 'com.language.widget';
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
  $.__views["header"] = Ti.UI.createLabel(
  { top: "30dp", color: "#000", font: { fontSize: 13, fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'This is com.language.widget', id: "header" });

  $.__views["header"] && $.addTopLevelView($.__views["header"]);
  $.__views["myLabel"] = Ti.UI.createLabel(
  { top: "5dp", color: "#000", font: { fontSize: 13, fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: L("language__intro_text"), id: "myLabel" });

  $.__views["myLabel"] && $.addTopLevelView($.__views["myLabel"]);
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