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
  { backgroundColor: "white", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = require("specialView").createSpecialView(
  {});

  $.__views["index"].add($.__views["__alloyId0"]);
  doClick ? $.addListener($.__views["__alloyId0"], 'click', doClick) : __defers['$.__views["__alloyId0"]!click!doClick'] = true;$.__views["__alloyId1"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: 'Click Me!' });

  $.__views["__alloyId0"].add($.__views["__alloyId1"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var vendorLib = require('greeting');

  function doClick(e) {
    vendorLib.popup();
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId0"]!click!doClick'] && $.addListener($.__views["__alloyId0"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;