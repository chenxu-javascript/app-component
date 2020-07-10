import React from 'react';

var Header = function Header(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, children);
};

export default Header;