import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import logoImage from '../res/logo.png'
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import { Home, About, Board} from '../Routes/index'; 

const { Header } = Layout;


class LayHeader extends Component {
    render() {
        return (
            
                 <Header>
                    <div className="logo">
                        <img 
                        width='100%'
                        height='90%'
                        src={logoImage}
                        alt='logo'
                        />
                    </div>
                    <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/About">About</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Product">Product</Link></Menu.Item>
                    </Menu>
                </Header>
        );
    }
}

export default LayHeader;
