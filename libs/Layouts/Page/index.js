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
import AlloyFinger from "alloyfinger";
import Top from "../Top";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import Refresh from "../Refresh";

var Page = /*#__PURE__*/function (_React$Component) {
  _inherits(Page, _React$Component);

  var _super = _createSuper(Page);

  function Page() {
    _classCallCheck(this, Page);

    return _super.apply(this, arguments);
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (!this.props.slideClose) return;
      new AlloyFinger(this.page, {
        swipe: function swipe(evt) {
          if (evt.direction === "Right") {
            if (_.isFunction(_this.props.close)) _this.props.close();
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(r) {
          return _this2.page = r;
        },
        className: "page-container"
      }, this.props.children);
    }
  }]);

  return Page;
}(React.Component);

Page.Top = Top;
Page.Header = Header;
Page.Body = Body;
Page.Footer = Footer;
Page.Refresh = Refresh;
Page.propTypes = {
  slideClose: PropTypes.bool
};
Page.defaultProps = {
  slideClose: false
};
export default Page;