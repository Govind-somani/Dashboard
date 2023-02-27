import React from "react";

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      // src="/static/logo.svg"
      src="/static/logo.png"
      height="43px"
      style={{ borderRadius: 5 }}
      {...props}
    />
  );
};

export default Logo;
