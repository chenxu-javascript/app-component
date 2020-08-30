import "core-js/modules/es6.array.map";
import "core-js/modules/es6.array.find";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.array.index-of";
import React from "react";
import moment from "moment";
import { history } from "umi";
import _ from "lodash";
import Layout from "../Layouts/Layout";

function isAndroid() {
  var u = navigator.userAgent;

  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    if (window.ShowFitness !== undefined) return true;
  }

  return false;
}

var classNameIos = isAndroid() ? "toft-page-container" : "toft-page-container  slide-in-left";
var classNameOutIos = isAndroid() ? "toft-page-container" : "toft-page-container slide-out-right";
export default {
  routerStack: [],
  renderPage: null,
  removePage: null,
  getStack: function getStack() {
    var _this = this;

    // 初始化路由堆栈
    if (_.isEmpty(this.routerStack)) {
      this.routerStack.push({
        ts: moment("1970-01-01").format("YYYYMMDDHHmmssSSS"),
        title: document.title
      }); // 添加路由监听，当路由变化时，将清除所有大于当前路由时间的页面

      history.listen(function (location) {
        _this.removeStack(_.get(location, "query.ts"));
      });
    }

    return this.routerStack;
  },
  pushStack: function pushStack(ts, title) {
    // 为路由添加一行数据
    this.getStack().push({
      ts: ts,
      title: title
    });
    document.title = title || "军体学习课堂"; //
  },
  go: function go(title) {
    var index = -1;
    var i = 0;

    while (index === -1 && i < this.routerStack.length) {
      if (_.get(this.routerStack[i], "title") === title) {
        index = i;
      }

      i++;
    }

    if (index !== -1) {
      history.go(index - this.routerStack.length + 1);
    }
  },
  replace: function replace(title, component, _pop) {
    var _this2 = this;

    var pageContainer = document.createElement("div");
    var ts = moment().format("YYYYMMDDHHmmssSSS");
    pageContainer.id = ts;
    pageContainer.className = classNameIos;
    var pageComponent = /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement(Layout, null)), {
      title: title,
      component: component,
      close: function close() {
        history.goBack();
      },
      pop: function pop(resultData) {
        history.goBack();
        if (_.isFunction(_pop)) _pop(resultData);
      }
    });
    this.renderPage && this.renderPage(ts, /*#__PURE__*/React.createElement("div", {
      id: ts,
      className: classNameIos
    }, pageComponent));
    var item = this.routerStack.pop();
    this.pushStack(ts, title);
    history.replace({
      query: {
        ts: ts
      }
    });
    setTimeout(function () {
      _this2.removePage(item === null || item === void 0 ? void 0 : item.ts);
    }, 240);
  },
  removeStack: function removeStack(ts) {
    var _this3 = this;

    ts = ts || moment("1970-01-01").format("YYYYMMDDHHmmssSSS");
    var stack = this.getStack();

    var removeList = _.filter(stack, function (item) {
      return ts < item.ts;
    });

    this.routerStack = _.filter(stack, function (item) {
      return ts >= item.ts;
    }); // 还原当前页面的title

    var findStack = _.find(this.routerStack, {
      ts: ts
    });

    var title = _.get(findStack, "title");

    if (title) document.title = title;else document.title = "军体学习课堂";

    var tsList = _.map(removeList, "ts");

    _.map(tsList, function (ts) {
      _this3.removeElement(ts, function () {
        return _this3.removePage(ts);
      });
    });
  },
  removeElement: function removeElement(elementId, callback) {
    var removeElement = document.getElementById(elementId);
    if (!removeElement) return;
    removeElement.className = classNameOutIos;
    setTimeout(function () {
      callback();
    }, 240);
  },
  navigate: function navigate(title, component, _pop2) {
    var pageContainer = document.createElement("div");
    var ts = moment().format("YYYYMMDDHHmmssSSS");
    pageContainer.id = ts;
    pageContainer.className = classNameIos;
    var pageComponent = /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement(Layout, null)), {
      title: title,
      component: component,
      close: function close() {
        history.goBack();
      },
      pop: function pop(resultData) {
        history.goBack();
        if (_.isFunction(_pop2)) _pop2(resultData);
      }
    });
    this.renderPage && this.renderPage(ts, /*#__PURE__*/React.createElement("div", {
      id: ts,
      className: classNameIos
    }, pageComponent));
    this.pushStack(ts, title);
    history.push({
      query: {
        ts: ts
      }
    });
  }
};