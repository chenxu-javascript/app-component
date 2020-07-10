import "core-js/modules/es6.array.map";
import "core-js/modules/es6.array.filter";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import _Navigator from "../../Tools/_Navigator";

var Container = function Container(props) {
  var children = props.children;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var renderPage = useCallback(function (ts, page) {
    var params = {
      ts: ts,
      page: page
    };

    var _pages = [].concat(_toConsumableArray(pages), [params]);

    setPages(_pages);
  }, [pages]);
  var removePage = useCallback(function (ts) {
    var _pages = _.filter(pages, function (pageData) {
      return !_.isEqual(pageData.ts, ts);
    });

    setPages(_pages);
  }, [pages]);
  useEffect(function () {
    _Navigator.renderPage = renderPage;
    _Navigator.removePage = removePage;
  }, [renderPage, removePage]);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container"
  }, children, _.map(pages, function (pageData) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: pageData.ts
    }, /*#__PURE__*/ReactDOM.createPortal(pageData.page, document.body));
  }));
};

export default Container;