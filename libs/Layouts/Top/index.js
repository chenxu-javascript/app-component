import "antd-mobile/lib/icon/style/css";
import _Icon from "antd-mobile/lib/icon";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.array.map";
import "antd-mobile/lib/modal/style/css";
import _Modal from "antd-mobile/lib/modal";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

var Top = /*#__PURE__*/function (_React$Component) {
  _inherits(Top, _React$Component);

  var _super = _createSuper(Top);

  function Top() {
    var _this;

    _classCallCheck(this, Top);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.openMore = function () {
      _Modal.operation(_.map(_this.props.moreMenus, function (menu) {
        return {
          text: menu.title,
          onPress: menu.onPress
        };
      }));
    };

    return _this;
  }

  _createClass(Top, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "page-top",
        style: this.props.style
      }, this.props.goBack ? /*#__PURE__*/React.createElement(TopMenu, {
        icon: "left",
        onPress: this.props.close
      }) : null, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, this.props.title), this.props.children);
    }
  }]);

  return Top;
}(React.Component);

var TopMenu = /*#__PURE__*/function (_React$Component2) {
  _inherits(TopMenu, _React$Component2);

  var _super2 = _createSuper(TopMenu);

  function TopMenu() {
    _classCallCheck(this, TopMenu);

    return _super2.apply(this, arguments);
  }

  _createClass(TopMenu, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "btn",
        onClick: this.props.onPress
      }, this.props.icon ? /*#__PURE__*/React.createElement(_Icon, {
        type: this.props.icon
      }) : null, this.props.title ? /*#__PURE__*/React.createElement("span", null, this.props.title) : null);
    }
  }]);

  return TopMenu;
}(React.Component);

Top.propTypes = {
  title: PropTypes.string.isRequired,
  // 返回时传递返回值的方法
  goBack: PropTypes.bool,
  // 显示返回按钮
  leftMenus: PropTypes.array,
  // {icon,title,badge,onPress}
  rightMenus: PropTypes.array,
  // [{icon,title,badge,onPress}]
  moreMenus: PropTypes.array,
  // [{title,onPress}]
  close: PropTypes.func
};
Top.defaultProps = {
  goBack: true
};
export default Top;