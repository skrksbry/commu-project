import React, { Component, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
import banner1 from "./res/high.jpg";
import banner2 from "./res/testBanner.jpg";
import Fade from "react-reveal/Fade";
import { Layout, Card, Space, Carousel } from 'antd';
import { useTranslation } from 'react-i18next'
 
const { Content, Footer } = Layout;

function Main() {  
    const { t , i18n } = useTranslation('lang', { useSuspense: false });
    const [position, setPosition] = useState(0);
    const sliderSetting = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => setPosition(current)
    }
    const sliderSetting2 = {
      autoplay: true,
      afterChange: current => setPosition(current)
    }
    const contentStyle = {
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79'
    };
    
  return (
      <Layout className="layout">
        <Content style={{ padding: '0 0px' }}>
        <Carousel {...sliderSetting2}>
            <div style={contentStyle}>
                <h3 className={position == 0 ? "fadeAnimation" : ""}>{t("banner_1")}</h3>
                <img src={banner2} />
            </div>
            <div style={contentStyle}>
                <h3 className={position == 1 ? "fadeAnimation" : ""}>{t("banner_2")}</h3>
                <img src={banner1} />
            </div>
        </Carousel>
          <div className="site-layout-content">
            <Space direction="vertical">
              <Fade left>
                <Card title="Card" style={{ width: 300 }}>
                  <p>Card content</p> 
                  <p>Card content</p>
                </Card>
              </Fade>
              <Fade left>
                <Card title="Card" style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Fade>
              
            </Space>
            
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Company Name ©2020</Footer>
      </Layout>
  )
}


export default Main;