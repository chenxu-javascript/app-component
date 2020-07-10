import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import AlloyFinger from "alloyfinger";

import Top from "../Top";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import Refresh from "../Refresh";

class Page extends React.Component {
  componentDidMount() {
    if (!this.props.slideClose) return;
    new AlloyFinger(this.page, {
      swipe: evt => {
        if (evt.direction === "Right") {
          if (_.isFunction(this.props.close)) this.props.close();
        }
      }
    });
  }

  render() {
    return (
      <div ref={r => (this.page = r)} className="page-container">
        {this.props.children}
      </div>
    );
  }
}

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
