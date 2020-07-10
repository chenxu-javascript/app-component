import React from "react";
import { ActivityIndicator } from "antd-mobile";

class Loading extends React.Component {
  render() {
    const { text, ...other } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator size="large" {...other} />
        <div style={{ color: "#999999", marginTop: 10 }}>{text}</div>
      </div>
    );
  }
}

export default Loading;
