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
        _this.tb = void 0;
        _this.bb = void 0;
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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "white", layout: "vertical", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["__alloyId0"] = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: "25dp", color: "#000", font: { fontSize: 12, }, text: L('foo'), });
        _this["index"].add(_this["__alloyId0"]);
        _this["__alloyId1"] = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: "25dp", color: "#000", font: { fontSize: 12, }, text: "TabbedBar", });
        _this["index"].add(_this["__alloyId1"]);
        _this["__alloyId10"] = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: "25dp", color: "#000", font: { fontSize: 12, }, text: "ButtonBar", });
        _this["index"].add(_this["__alloyId10"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["tb"] = _this.tb;
        _this.__views["__alloyId10"] = _this.__alloyId10;
        _this.__views["bb"] = _this.bb;
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
