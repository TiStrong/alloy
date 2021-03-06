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
var alloy_1 = __importDefault(require("alloy"));
var BaseController_1 = __importDefault(require("/controllers/BaseController"));
var indexAbstract = /** @class */ (function (_super) {
    __extends(indexAbstract, _super);
    function indexAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        var __alloyId2 = {};
        var __alloyId5 = [];
        var __alloyId6 = { type: 'Ti.UI.Label', bindId: 'title', properties: { bindId: "title", }, };
        __alloyId5.push(__alloyId6);
        var __alloyId4 = { properties: { name: "first", }, childTemplates: __alloyId5, };
        __alloyId2["first"] = __alloyId4;
        var __alloyId9 = [];
        var __alloyId10 = { type: 'Ti.UI.Label', bindId: 'title', properties: { bindId: "title", }, };
        __alloyId9.push(__alloyId10);
        var __alloyId11 = { type: 'Ti.UI.Label', bindId: 'subtitle', properties: { bindId: "subtitle", }, };
        __alloyId9.push(__alloyId11);
        var __alloyId8 = { properties: { name: "second", }, childTemplates: __alloyId9, };
        __alloyId2["second"] = __alloyId8;
        var __alloyId14 = [];
        var __alloyId15 = { type: 'Ti.UI.ImageView', bindId: 'leftImage', properties: { bindId: "leftImage", }, };
        __alloyId14.push(__alloyId15);
        var __alloyId16 = { type: 'Ti.UI.Label', bindId: 'title', properties: { bindId: "title", }, };
        __alloyId14.push(__alloyId16);
        var __alloyId17 = { type: 'Ti.UI.Label', bindId: 'subtitle', properties: { bindId: "subtitle", }, };
        __alloyId14.push(__alloyId17);
        var __alloyId13 = { properties: { name: "third", }, childTemplates: __alloyId14, };
        __alloyId2["third"] = __alloyId13;
        var __alloyId20 = [];
        _this["__alloyId21"] = { template: "first", title: { text: "this is some text", }, };
        __alloyId20.push(_this["__alloyId21"]);
        _this["__alloyId18"] = Ti.UI.createListSection({});
        _this["__alloyId18"].items = __alloyId20;
        var __alloyId22 = [];
        __alloyId22.push(_this["__alloyId18"]);
        _this["__alloyId1"] = Ti.UI.createListView({ sections: __alloyId22, templates: __alloyId2, });
        _this["__alloyId0"] = alloy_1.default.createWidget('foo', 'widget', { children: [_this["__alloyId1"]], __parentSymbol: _this["index"], });
        _this["__alloyId0"].setParent(_this["index"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId21"] = _this.__alloyId21;
        _this.__views["__alloyId18"] = _this.__alloyId18;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId0"] = _this.__alloyId0;
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
