import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ReactTouchLoader from "react-touch-loader";

class Refresh extends React.Component {
  onRefresh = resolve => {
    setTimeout(() => {
      if (_.isFunction(this.props.onRefresh)) this.props.onRefresh();
      resolve();
    }, 360);
  };

  render() {
    return (
      <div className="page-refresh">
        <ReactTouchLoader initializing={0} className="touch-loader" onRefresh={this.onRefresh}>
          {this.props.children}
        </ReactTouchLoader>
      </div>
    );
  }
}

Refresh.propTypes = {
  onRefresh: PropTypes.func.isRequired
};

Refresh.defaultProps = {};

export default Refresh;
