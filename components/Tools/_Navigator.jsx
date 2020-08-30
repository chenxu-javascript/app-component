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

const classNameIos = isAndroid()
  ? "toft-page-container"
  : "toft-page-container  slide-in-left";
const classNameOutIos = isAndroid()
    ? "toft-page-container"
    : "toft-page-container slide-out-right";
export default {
  routerStack: [],
  renderPage: null,
  removePage: null,

  getStack() {
    // 初始化路由堆栈
    if (_.isEmpty(this.routerStack)) {
      this.routerStack.push({
        ts: moment("1970-01-01").format("YYYYMMDDHHmmssSSS"),
        title: document.title
      });
      // 添加路由监听，当路由变化时，将清除所有大于当前路由时间的页面
      history.listen(location => {
        this.removeStack(_.get(location, "query.ts"));
      });
    }
    return this.routerStack;
  },

  pushStack(ts, title) {
    // 为路由添加一行数据
    this.getStack().push({
      ts,
      title
    });
    document.title = title || "军体学习课堂";
    //
  },

  go(title) {
    let index = -1;
    let i = 0;
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

  replace(title, component, pop) {
    let pageContainer = document.createElement("div");
    const ts = moment().format("YYYYMMDDHHmmssSSS");

    pageContainer.id = ts;
    pageContainer.className = classNameIos;

    let pageComponent = React.cloneElement(React.cloneElement(<Layout />), {
      title,
      component,
      close: () => {
        history.goBack();
      },
      pop: resultData => {
        history.goBack();
        if (_.isFunction(pop)) pop(resultData);
      }
    });

    this.renderPage &&
      this.renderPage(
        ts,
        <div id={ts} className={classNameIos}>
          {pageComponent}
        </div>
      );

    const item = this.routerStack.pop();
    this.pushStack(ts, title);
    history.replace({
      query: {
        ts
      }
    });
    setTimeout(() => {
      this.removePage(item?.ts);
    }, 240);
  },

  removeStack(ts) {
    ts = ts || moment("1970-01-01").format("YYYYMMDDHHmmssSSS");

    let stack = this.getStack();

    const removeList = _.filter(stack, item => {
      return ts < item.ts;
    });

    this.routerStack = _.filter(stack, item => {
      return ts >= item.ts;
    });

    // 还原当前页面的title
    const findStack = _.find(this.routerStack, {
      ts
    });
    const title = _.get(findStack, "title");
    if (title) document.title = title;
    else document.title = "军体学习课堂";
    const tsList = _.map(removeList, "ts");

    _.map(tsList, ts => {
      this.removeElement(ts, () => this.removePage(ts));
    });
  },

  removeElement(elementId, callback) {
    const removeElement = document.getElementById(elementId);
    if (!removeElement) return;
    removeElement.className = classNameOutIos;
    setTimeout(() => {
      callback();
    }, 240);
  },

  navigate(title, component, pop) {
    const pageContainer = document.createElement("div");
    const ts = moment().format("YYYYMMDDHHmmssSSS");
    pageContainer.id = ts;
    pageContainer.className = classNameIos;
    let pageComponent = React.cloneElement(React.cloneElement(<Layout />), {
      title,
      component,
      close: () => {
        history.goBack();
      },
      pop: resultData => {
        history.goBack();
        if (_.isFunction(pop)) pop(resultData);
      }
    });
    this.renderPage &&
      this.renderPage(
        ts,
        <div id={ts} className={classNameIos}>
          {pageComponent}
        </div>
      );
    this.pushStack(ts, title);

    history.push({
      query: {
        ts
      }
    });
  }
};
