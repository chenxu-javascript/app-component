import React, { forwardRef } from "react";
import classnames from "classnames";

const Body = props => {
  const { children, className = "" } = props;
  return <div className={classnames("page-body", className)}>{children}</div>;
};

export default forwardRef(Body);
