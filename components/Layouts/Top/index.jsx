import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Modal, Icon } from "antd-mobile";

class Top extends React.Component {
  openMore = () => {
    Modal.operation(
      _.map(this.props.moreMenus, menu => {
        return {
          text: menu.title,
          onPress: menu.onPress
        };
      })
    );
  };

  render() {
    return (
      <div className="page-top" style={this.props.style}>
        {this.props.goBack ? <TopMenu icon="left" onPress={this.props.close} /> : null}
        {/* {_.map(this.props.leftMenus, (menu, index) => {
          return <TopMenu key={index} {...menu} />;
        })} */}
        <div className="title">{this.props.title}</div>
        {/* {_.map(this.props.rightMenus, (menu, index) => {
          return <TopMenu key={index} {...menu} />;
        })} */}
        {/* {_.isEmpty(this.props.moreMenus) ? null : <TopMenu icon={Icons.Types.moreandroid} onPress={this.openMore} />} */}
      </div>
    );
  }
}

class TopMenu extends React.Component {
  render() {
    return (
      <div className="btn" onClick={this.props.onPress}>
        {this.props.icon ? <Icon type={this.props.icon} /> : null}
        {this.props.title ? <span>{this.props.title}</span> : null}
      </div>
    );
  }
}

Top.propTypes = {
  title: PropTypes.string.isRequired, // 返回时传递返回值的方法
  goBack: PropTypes.bool, // 显示返回按钮
  leftMenus: PropTypes.array, // {icon,title,badge,onPress}
  rightMenus: PropTypes.array, // [{icon,title,badge,onPress}]
  moreMenus: PropTypes.array, // [{title,onPress}]
  close: PropTypes.func
};

Top.defaultProps = {
  goBack: true
};

export default Top;
