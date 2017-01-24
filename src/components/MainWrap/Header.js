import React from "react";
import { Menu, Icon } from 'antd';
import {Link} from "dva/router";
import {connect} from 'dva';

function Header({dispatch,location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
      style={{position:"relative",zIndex:999999}}
    >
      <Menu.Item key="/page_items">
        <Link to="/page_items"><Icon type="bars" />items</Link>
      </Menu.Item>
      <Menu.Item key="/page_arms">
        <Link to="/page_arms"><Icon type="bars" />arms</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
    </Menu>
  );
}
export default connect()(Header)
