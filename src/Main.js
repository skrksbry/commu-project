import React, { Component, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import baseUrl from "./res/yc.jpg";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import { Layout, Card, Space } from 'antd';
import { useTranslation } from 'react-i18next'
 
const { Content, Footer } = Layout;

function Main() {  
    const [position, setPosition] = useState(0);
    const [Language, setLanguage] = useState(0);
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
    
  return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
        <Slider {...sliderSetting}>
            <div>
                <h3 className={position == 0 ? "fadeAnimation" : ""}>{Language.banner_1}</h3>
                <img src={baseUrl} />
            </div>
            <div>
                <h3 className={position == 1 ? "fadeAnimation" : ""}>{Language.banner_2}</h3>
                <img src={baseUrl} />
            </div>
            <div>
                <h3 className={position == 2 ? "fadeAnimation" : ""}>BANNER TITLE 1</h3>
                <img src={baseUrl} />
            </div>
            <div>
                <h3 className={position == 3 ? "fadeAnimation" : ""}>BANNER TITLE 1</h3>
                <img src={baseUrl} />
            </div>
        </Slider>
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