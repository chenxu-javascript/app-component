import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "antd-mobile/lib/flex/style/css";
import _Flex from "antd-mobile/lib/flex";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import empty from "@assets/common/empty.png";

var Empty = /*#__PURE__*/function (_React$Component) {
  _inherits(Empty, _React$Component);

  var _super = _createSuper(Empty);

  function Empty() {
    _classCallCheck(this, Empty);

    return _super.apply(this, arguments);
  }

  _createClass(Empty, [{
    key: "render",

    /**
     * render
     */
    value: function render() {
      var _ref = this.props || {},
          _ref$visible = _ref.visible,
          visible = _ref$visible === void 0 ? true : _ref$visible;

      if (!visible) {
        return "";
      }

      return /*#__PURE__*/React.createElement(_Flex, {
        direction: "column",
        justify: "center",
        align: "center"
      }, /*#__PURE__*/React.createElement("img", {
        src: empty,
        alt: "",
        style: {
          height: 136,
          width: 136
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#999999"
        }
      }, this.props.text));
    }
  }]);

  return Empty;
}(React.Component);

Empty.propTypes = {
  text: PropTypes.string
};
Empty.defaultProps = {};
export default Empty;