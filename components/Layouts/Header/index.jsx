import React from 'react';

const Header = props => {
  const { children } = props;
  return <div className="page-header">{children}</div>;
};

export default Header;
