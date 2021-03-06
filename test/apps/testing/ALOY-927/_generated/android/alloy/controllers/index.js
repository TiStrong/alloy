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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, title: "Keyboard Types", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["scrolly"] = Ti.UI.createScrollView(
  { layout: "vertical", id: "scrolly" });

  $.__views["index"].add($.__views["scrolly"]);
  $.__views["normal"] = Ti.UI.createTextField(
  { top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, keyboardType: Ti.UI.KEYBOARD_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DEFAULT, autocorrect: true, autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS, hintText: "default", id: "normal" });

  $.__views["scrolly"].add($.__views["normal"]);
  $.__views["numeric"] = Ti.UI.createTextField(
  { top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "numbers_punctuation / done", id: "numeric", keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION, returnKeyType: Ti.UI.RETURNKEY_DONE });

  $.__views["scrolly"].add($.__views["numeric"]);
  $.__views["web"] = Ti.UI.createTextField(
  { top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "url / go", id: "web", keyboardType: Ti.UI.KEYBOARD_URL, returnKeyType: Ti.UI.RETURNKEY_GO });

  $.__views["scrolly"].add($.__views["web"]);
  $.__views["password"] = Ti.UI.createTextField(
  { top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, keyboardType: Ti.UI.KEYBOARD_DEFAULT, hintText: "password", passwordMask: true, autocorrect: false, autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE, id: "password" });

  $.__views["scrolly"].add($.__views["password"]);
  $.__views["textarea"] = Ti.UI.createTextArea(
  { top: 40, width: "85%", height: "40dp", borderWidth: 1, borderColor: "#999", keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION, returnKeyType: Ti.UI.RETURNKEY_SEND, id: "textarea", autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL });

  $.__views["scrolly"].add($.__views["textarea"]);
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