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
  this.__controllerPath = 'button';
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
  $.__views["button"] = Ti.UI.createView(
  { height: "50dp", width: "25%", borderWidth: 1, borderColor: "#000", backgroundColor: "#a00", id: "button" });

  $.__views["button"] && $.addTopLevelView($.__views["button"]);
  doTouchstart ? $.addListener($.__views["button"], 'touchstart', doTouchstart) : __defers['$.__views["button"]!touchstart!doTouchstart'] = true;doTouchend ? $.addListener($.__views["button"], 'touchend', doTouchend) : __defers['$.__views["button"]!touchend!doTouchend'] = true;$.__views["label"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#fff", font: { fontSize: "12dp", fontWeight: "bold" }, touchEnabled: false, id: "label" });

  $.__views["button"].add($.__views["label"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var args = arguments[0] || {};
  var label = args.label || '';

  function doTouchstart(e) {
    e.source.backgroundColor = '#333';

    var obj = {};
    switch (label) {
      case 'reset':
        break;
      case 'template3':
        obj.image = '/alloy.png';
      case 'template2':
        obj.subtitle = 'this is the subtitle for the item';
      case 'template1':
        obj.title = 'some title';
        break;
      default:
        Ti.API.warn('invalid template type "' + label + '"');
        break;}


    $.trigger('buttonClick', _.extend(e, { modelObj: obj }));
  }

  function doTouchend(e) {
    e.source.backgroundColor = '#a00';
  }

  args.label && ($.label.text = args.label);

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["button"]!touchstart!doTouchstart'] && $.addListener($.__views["button"], 'touchstart', doTouchstart);__defers['$.__views["button"]!touchend!doTouchend'] && $.addListener($.__views["button"], 'touchend', doTouchend);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;