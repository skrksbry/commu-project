import React, { Component, useState, useEffect } from 'react';
import Layheader from './Layout/LayHeader';
import 'antd/dist/antd.css';
import './index.css';
import Fade from "react-reveal/Fade";
import { Layout, Card, Space } from 'antd';
import Routers from "./Routes/Router";

const { Content, Footer } = Layout;

function About() {  
  return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
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


export default About;