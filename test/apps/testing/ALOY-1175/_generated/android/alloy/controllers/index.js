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
  $.__views["win"] = Ti.UI.createWindow(
  { id: "win" });

  $.__views["win"] && $.addTopLevelView($.__views["win"]);
  const __alloyId9 = () => {
    $.__views["win"].removeEventListener('open', __alloyId9);
    if ($.__views["win"].activity) {
      $.__views["win"].activity.onCreateOptionsMenu = e => {
        var __alloyId1 = { id: "item1", title: "Expand", showAsAction: Titanium.Android.SHOW_AS_ACTION_IF_ROOM };
        if (false) {
          __alloyId1.actionView = false;
        }
        if (e.menu) {
          $.__views["item1"] = e.menu.add(_.pick(__alloyId1, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["item1"]) {
          $.__views["item1"].applyProperties(_.omit(__alloyId1, Alloy.Android.menuItemCreateArgs));
        }
        expand ? $.addListener($.__views["item1"], 'click', expand) : __defers['$.__views["item1"]!click!expand'] = true;var __alloyId3 = { title: "Collapse", showAsAction: Titanium.Android.SHOW_AS_ACTION_IF_ROOM };
        if (false) {
          __alloyId3.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId2"] = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId2"]) {
          $.__views["__alloyId2"].applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
        }
        collapse ? $.addListener($.__views["__alloyId2"], 'click', collapse) : __defers['$.__views["__alloyId2"]!click!collapse'] = true;$.__views["__alloyId5"] = Ti.UI.createView(
        { layout: "horizontal" });

        $.__views["__alloyId6"] = Ti.UI.createButton(
        { title: 'Search', left: 0 });

        $.__views["__alloyId5"].add($.__views["__alloyId6"]);
        $.__views["__alloyId7"] = Ti.UI.createTextField(
        { right: 0, hintText: "Type Something" });

        $.__views["__alloyId5"].add($.__views["__alloyId7"]);
        var __alloyId8 = { id: "item3", title: "Item 3", showAsAction: Titanium.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW };
        if ($.__views["__alloyId5"]) {
          __alloyId8.actionView = $.__views["__alloyId5"];
        }
        if (e.menu) {
          $.__views["item3"] = e.menu.add(_.pick(__alloyId8, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["item3"]) {
          $.__views["item3"].applyProperties(_.omit(__alloyId8, Alloy.Android.menuItemCreateArgs));
        }
        report ? $.addListener($.__views["item3"], 'expand', report) : __defers['$.__views["item3"]!expand!report'] = true;report ? $.addListener($.__views["item3"], 'collapse', report) : __defers['$.__views["item3"]!collapse!report'] = true;
      };
    } else {
      Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
      Ti.API.warn('or other UI component which does not have an Android activity.');
      Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
    }
  };
  $.__views["win"].addEventListener('open', __alloyId9);
  $.__views["msg"] = Ti.UI.createLabel(
  { color: "white", text: "Tap the menu buttons", font: { fontSize: "16dp" }, id: "msg" });

  $.__views["win"].add($.__views["msg"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.win.open();

  function expand(e) {
    $.item3.expandActionView();
  }

  function collapse(e) {
    $.item3.collapseActionView();
  }

  function report(e) {
    Ti.API.info(e.type);
    Ti.API.info($.item3.actionViewExpanded);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["item1"]!click!expand'] && $.addListener($.__views["item1"], 'click', expand);__defers['$.__views["__alloyId2"]!click!collapse'] && $.addListener($.__views["__alloyId2"], 'click', collapse);__defers['$.__views["item3"]!expand!report'] && $.addListener($.__views["item3"], 'expand', report);__defers['$.__views["item3"]!collapse!report'] && $.addListener($.__views["item3"], 'collapse', report);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;