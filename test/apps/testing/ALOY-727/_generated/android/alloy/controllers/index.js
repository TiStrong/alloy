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
  { backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId0 = 2;var __alloyId1 = 3;var __alloyId3 = [];__alloyId3.push("button 1");__alloyId3.push("button 2");if (true) {
    $.__views["androidView"] = Ti.UI.createView(
    { id: "androidView", layout: "horizontal" });

    $.__views["avLabel"] = Ti.UI.createLabel(
    { color: "#fff", left: "20dp", height: Ti.UI.SIZE, width: Ti.UI.SIZE, textAlign: "center", font: { fontSize: "16dp" }, id: "avLabel", text: "This is a label" });

    $.__views["androidView"].add($.__views["avLabel"]);
  }
  $.__views["options"] = Ti.UI.createOptionDialog(
  { buttonNames: __alloyId3, androidView: $.__views["androidView"], id: "options", title: "App Options", destructive: 3, cancel: 2 });

  $.__views["__alloyId6"] = Ti.UI.createButton(
  { height: Ti.UI.SIZE, width: Ti.UI.SIZE, title: 'options' });

  $.__views["index"].add($.__views["__alloyId6"]);
  showOptions ? $.addListener($.__views["__alloyId6"], 'click', showOptions) : __defers['$.__views["__alloyId6"]!click!showOptions'] = true;exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function showOptions(e) {
    $.options.show();
  }

  $.avLabel.text = 'This is an androidView';

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId6"]!click!showOptions'] && $.addListener($.__views["__alloyId6"], 'click', showOptions);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;