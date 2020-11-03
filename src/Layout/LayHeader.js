import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import logoImage from '../res/logo.png'
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { Header } = Layout;
const { SubMenu } = Menu;



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
                        <SubMenu key="SubMenu" title={t('business-areas')}>
                            <Menu.ItemGroup title={t('business-robot')}>
                                <Menu.Item key="setting:1">{t('business-robot-fst')}</Menu.Item>
                                <Menu.Item key="setting:2">{t('business-robot-sec')}</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title={t('business-robot')}>
                                <Menu.Item key="setting:1">{t('business-robot-fst')}</Menu.Item>
                                <Menu.Item key="setting:2">{t('business-robot-sec')}</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>
                
        );
}

export default LayHeader;
