import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  pop = resultData => {
    if (_.isFunction(this.props.pop)) {
      if (this.props.pop) this.props.pop(resultData);
    } else {
      if (this.props.close) this.props.close();
    }
  };

  render() {
    const { component, ...other } = this.props;
    const props = Object.assign({}, other, {
      pop: this.pop,
    });

    return (
      <div className="layouts-container">
        {React.cloneElement(component, { ...props })}
      </div>
    );
  }
}

Layout.propTypes = {
  component: PropTypes.element, // 返回时传递返回值的方法
  pop: PropTypes.func, // 返回时传递返回值的方法
  close: PropTypes.func, // 返回时传递返回值的方法
};

Layout.defaultProps = {};

export default Layout;
