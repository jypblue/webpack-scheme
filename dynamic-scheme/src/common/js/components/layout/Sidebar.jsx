import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


class Sidebar extends Component {
  constructor(props,context){
	super(props,context);
  }

  render() {

  	const {version,user} = this.props;

    return (

    	<div className="sidebar">
        <div className="sidebar-item">
          <p>Redux App Demo</p>
          <p>Logged in as <b className="user-name">{user.name}</b></p>
          <p>Version: {version}</p>
        </div>
         <Menu theme={'dark'}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          mode="inline"
          >
          <Menu.Item key="1"><Link to="/home"><span><Icon type="home" /><span>首页</span></span></Link></Menu.Item>
          <Menu.Item key="2"><Link to="/todo"><span><Icon type="book" /><span>Todo</span></span></Link></Menu.Item>
          <Menu.Item key="3"><Link to="/counter"><span><Icon type="edit" /><span>Counter</span></span></Link></Menu.Item>
          <Menu.Item key="4"><Link to="/about"><span><Icon type="question-circle" /><span>About</span></span></Link></Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <SubMenu key="sub3" title="三级导航">
              <Menu.Item key="7">选项7</Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
		</div>
    );
  }
}

export default Sidebar;
