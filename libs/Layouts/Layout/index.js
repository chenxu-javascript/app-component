import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.define-properties";
import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.array.for-each";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import "core-js/modules/es6.object.assign";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

var Layout = /*#__PURE__*/function (_React$Component) {
  _inherits(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, props);

    _this.pop = function (resultData) {
      if (_.isFunction(_this.props.pop)) {
        if (_this.props.pop) _this.props.pop(resultData);
      } else {
        if (_this.props.close) _this.props.close();
      }
    };

    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          other = _objectWithoutProperties(_this$props, ["component"]);

      var props = Object.assign({}, other, {
        pop: this.pop
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "layouts-container"
      }, /*#__PURE__*/React.cloneElement(component, _objectSpread({}, props)));
    }
  }]);

  return Layout;
}(React.Component);

Layout.propTypes = {
  component: PropTypes.element,
  // 返回时传递返回值的方法
  pop: PropTypes.func,
  // 返回时传递返回值的方法
  close: PropTypes.func // 返回时传递返回值的方法

};
Layout.defaultProps = {};
export default Layout;