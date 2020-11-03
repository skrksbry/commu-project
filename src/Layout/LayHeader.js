import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import logoImage from '../res/logo.png'
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { Header } = Layout;



function LayHeader ()  {
        const { t , i18n } = useTranslation('lang', { useSuspense: false });
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
                        <Menu.Item key="1"><Link to="/">{t("home")}</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/About">{t('about')}</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Product">{t('product')}</Link></Menu.Item>
                        
                    </Menu>
                </Header>
                
        );
        console.log(t("home"));
}

export default LayHeader;
