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
  this.__controllerPath = 'LandingPage';
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
  $.__views["landingPageWindow"] = Ti.UI.createWindow(
  { backgroundColor: "#000", id: "landingPageWindow" });

  $.__views["landingPageWindow"] && $.addTopLevelView($.__views["landingPageWindow"]);
  $.__views["loading"] = Alloy.createWidget('com.appcelerator.loading', 'widget', { id: "loading", opacity: 1, __parentSymbol: $.__views["landingPageWindow"] });
  $.__views["loading"].setParent($.__views["landingPageWindow"]);
  $.__views["__alloyId0"] = Ti.UI.createButton(
  { top: 200, width: 200, height: 50, title: 'CLOSE WINDOW' });

  $.__views["landingPageWindow"].add($.__views["__alloyId0"]);
  closeWindow ? $.addListener($.__views["__alloyId0"], 'click', closeWindow) : __defers['$.__views["__alloyId0"]!click!closeWindow'] = true;exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function closeWindow() {
    $.landingPageWindow.close();
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId0"]!click!closeWindow'] && $.addListener($.__views["__alloyId0"], 'click', closeWindow);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;