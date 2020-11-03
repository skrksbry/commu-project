import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Menu } from 'antd';


class LayNavigat extends Component {
    render(){
        return(
            <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Product</Menu.Item>
            </Menu>
        );
    }
}

export default LayNavigat;