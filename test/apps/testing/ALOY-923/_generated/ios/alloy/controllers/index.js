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
  { backgroundColor: "#fff", top: Alloy.Globals.winTop, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true) {
    var __alloyId0 = {};var __alloyId2 = [];var __alloyId5 = { type: 'Ti.UI.Button', properties: { height: "50dp", width: Ti.UI.SIZE, right: 0, title: 'Right' }, events: { click: clickRightButton } };var __alloyId6 = { type: 'Ti.UI.TextField', bindId: 'textfield', properties: { width: Ti.UI.FILL, bottom: 0, font: { fontSize: 12 }, borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS, rightButton: __alloyId5, bindId: "textfield", autocorrect: false, hintText: "User name / e-mail address" } };__alloyId2.push(__alloyId6);var __alloyId1 = { properties: { name: "inputTemplate" }, childTemplates: __alloyId2 };__alloyId0["inputTemplate"] = __alloyId1;var __alloyId8 = [];$.__views["__alloyId9"] = { template: "inputTemplate", textfield: { value: "" } };__alloyId8.push($.__views["__alloyId9"]);$.__views["idSection"] = Ti.UI.createListSection(
    { headerTitle: "Login Id", id: "idSection" });

    $.__views["idSection"].items = __alloyId8;var __alloyId10 = [];__alloyId10.push($.__views["idSection"]);$.__views["listView"] = Ti.UI.createListView(
    { top: 20, sections: __alloyId10, templates: __alloyId0, id: "listView" });

    $.__views["index"].add($.__views["listView"]);
  }
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function clickRightButton(event) {
    alert('Right Button');
  }

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