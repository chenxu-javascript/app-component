import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ReactTouchLoader from "react-touch-loader";

var Refresh = /*#__PURE__*/function (_React$Component) {
  _inherits(Refresh, _React$Component);

  var _super = _createSuper(Refresh);

  function Refresh() {
    var _this;

    _classCallCheck(this, Refresh);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onRefresh = function (resolve) {
      setTimeout(function () {
        if (_.isFunction(_this.props.onRefresh)) _this.props.onRefresh();
        resolve();
      }, 360);
    };

    return _this;
  }

  _createClass(Refresh, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "page-refresh"
      }, /*#__PURE__*/React.createElement(ReactTouchLoader, {
        initializing: 0,
        className: "touch-loader",
        onRefresh: this.onRefresh
      }, this.props.children));
    }
  }]);

  return Refresh;
}(React.Component);

Refresh.propTypes = {
  onRefresh: PropTypes.func.isRequired
};
Refresh.defaultProps = {};
export default Refresh;