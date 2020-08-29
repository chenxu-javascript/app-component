import React, { forwardRef } from "react";
import classnames from "classnames";

var Body = function Body(props) {
  var children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames("page-body", className)
  }, children);
};

export default /*#__PURE__*/forwardRef(Body);