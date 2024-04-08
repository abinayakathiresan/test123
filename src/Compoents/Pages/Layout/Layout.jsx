import React from "react";
import RouterConfig from "../../../RouterConfig";
import Header from "../Header/Header";

const Layout = ()=> {
  return(
    <div>
      <div><Header/></div>
      <div><RouterConfig/></div>
    </div>
  )
}
export default Layout;