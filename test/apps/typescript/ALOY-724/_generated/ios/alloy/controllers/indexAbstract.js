"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = __importDefault(require("/controllers/BaseController"));
var indexAbstract = /** @class */ (function (_super) {
    __extends(indexAbstract, _super);
    function indexAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        _this.__alloyId11 = void 0;
        _this.__alloyId13 = void 0;
        _this.__controllerPath = indexAbstract.controllerPath;
        _this.__parentSymbol = args && args['__parentSymbol'] ? args['__parentSymbol'] : null;
        _this.$model = args && args['$model'] ? args['$model'] : null;
        _this.__itemTemplate = args && args['__itemTemplate'] ? args['__itemTemplate'] : null;
        // Generated code that must be executed before all UI and/or
        // controller code. One example is all model and collection
        // declarations from markup.
        // <precode>
        // </precode>
        // Generated UI code
        // <viewCode>
        var __alloyId0 = [];
        _this["__alloyId2"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, title: "window 1", });
        _this["__alloyId3"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold", }, text: 'Label 1', });
        _this["__alloyId2"].add(_this["__alloyId3"]);
        _this["__alloyId1"] = Ti.UI.createTab({ window: _this["__alloyId2"], title: "tab 1", });
        __alloyId0.push(_this["__alloyId1"]);
        _this["__alloyId5"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, title: "window 2", });
        _this["__alloyId6"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold", }, text: 'Label 2', });
        _this["__alloyId5"].add(_this["__alloyId6"]);
        _this["__alloyId4"] = Ti.UI.createTab({ window: _this["__alloyId5"], title: "tab 2", });
        __alloyId0.push(_this["__alloyId4"]);
        _this["__alloyId8"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, title: "window 3", });
        _this["__alloyId9"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold", }, text: 'Label 3', });
        _this["__alloyId8"].add(_this["__alloyId9"]);
        _this["__alloyId7"] = Ti.UI.createTab({ window: _this["__alloyId8"], title: "tab 3", });
        __alloyId0.push(_this["__alloyId7"]);
        _this["index"] = Ti.UI.createTabGroup({ backgroundColor: "#fff", tabs: __alloyId0, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["index"] && _this.addListener(_this["index"], 'focus', _this.setCurrentTab.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["__alloyId13"] = _this.__alloyId13;
        _this.__views["index"] = _this.index;
        return _this;
        // </__view>
        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
        // </postcode>
    }
    indexAbstract.prototype.destroy = function () {
    };
    indexAbstract.controllerPath = 'index';
    return indexAbstract;
}(BaseController_1.default));
exports.indexAbstract = indexAbstract;
