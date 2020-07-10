import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "antd-mobile/lib/activity-indicator/style/css";
import _ActivityIndicator from "antd-mobile/lib/activity-indicator";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";

var Loading = /*#__PURE__*/function (_React$Component) {
  _inherits(Loading, _React$Component);

  var _super = _createSuper(Loading);

  function Loading() {
    _classCallCheck(this, Loading);

    return _super.apply(this, arguments);
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          other = _objectWithoutProperties(_this$props, ["text"]);

      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement(_ActivityIndicator, _extends({
        size: "large"
      }, other)), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#999999",
          marginTop: 10
        }
      }, text));
    }
  }]);

  return Loading;
}(React.Component);

export default Loading;