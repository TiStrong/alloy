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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["headerView"] = Ti.UI.createLabel(
  { backgroundColor: "#3498db", height: "50dp", width: Ti.UI.FILL, color: "#fff", font: { fontSize: "32dp", fontWeight: "bold" }, textAlign: "center", text: 'header view', id: "headerView" });

  var __alloyId1 = [];$.__views["__alloyId2"] = Ti.UI.createTableViewRow(
  {});

  __alloyId1.push($.__views["__alloyId2"]);$.__views["__alloyId3"] = Ti.UI.createLabel(
  { left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold" }, color: "#2c3e50", text: 'row 1' });

  $.__views["__alloyId2"].add($.__views["__alloyId3"]);
  $.__views["__alloyId4"] = Ti.UI.createTableViewRow(
  {});

  __alloyId1.push($.__views["__alloyId4"]);$.__views["__alloyId5"] = Ti.UI.createLabel(
  { left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold" }, color: "#2c3e50", text: 'row 2' });

  $.__views["__alloyId4"].add($.__views["__alloyId5"]);
  $.__views["__alloyId6"] = Ti.UI.createTableViewRow(
  {});

  __alloyId1.push($.__views["__alloyId6"]);$.__views["__alloyId7"] = Ti.UI.createLabel(
  { left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold" }, color: "#2c3e50", text: 'row 3' });

  $.__views["__alloyId6"].add($.__views["__alloyId7"]);
  $.__views["__alloyId8"] = Ti.UI.createTableViewRow(
  {});

  __alloyId1.push($.__views["__alloyId8"]);$.__views["__alloyId9"] = Ti.UI.createLabel(
  { left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold" }, color: "#2c3e50", text: 'row 4' });

  $.__views["__alloyId8"].add($.__views["__alloyId9"]);
  $.__views["table"] = Ti.UI.createTableView(
  { top: 0, bottom: "100dp", separatorColor: "#95a5a6", data: __alloyId1, headerView: $.__views["headerView"], touchEnabled: true, id: "table" });

  $.__views["index"].add($.__views["table"]);
  doClick ? $.addListener($.__views["table"], 'click', doClick) : __defers['$.__views["table"]!click!doClick'] = true;$.__views["untouchable"] = Ti.UI.createView(
  { height: "100dp", backgroundColor: "red", bottom: 0, touchEnabled: false, id: "untouchable" });

  $.__views["index"].add($.__views["untouchable"]);
  doClick ? $.addListener($.__views["untouchable"], 'click', doClick) : __defers['$.__views["untouchable"]!click!doClick'] = true;$.__views["untouchableLabel"] = Ti.UI.createLabel(
  { font: { fontSize: "24dp", fontWeight: "normal" }, color: "#fff", textAlign: "center", text: 'i won\'t respond to clicks', touchEnabled: false, id: "untouchableLabel" });

  $.__views["untouchable"].add($.__views["untouchableLabel"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doClick() {
    alert('I was clicked');
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["table"]!click!doClick'] && $.addListener($.__views["table"], 'click', doClick);__defers['$.__views["untouchable"]!click!doClick'] && $.addListener($.__views["untouchable"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;