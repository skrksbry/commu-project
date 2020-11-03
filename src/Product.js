import React from 'react';
import LayTopBanner from './Layout/LayTopBanner';
import 'antd/dist/antd.css';
import './index.css';
import Fade from "react-reveal/Fade";
import { Layout,Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next'

const { Content, Footer } = Layout;
const pagename = "product";

function About() {  
  const { t , i18n } = useTranslation('lang', { useSuspense: false });
  return (
      <Layout className="layout">
        <LayTopBanner title={t(pagename)} />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
          <Row>
            <Col span={4} />
            <Col span={4}>
                <Fade>
                    <Card className="site-product-cards" cover={<img alt="Product1" src="http://placehold.it/210x210" />} hoverable>
                        <p>테스트 기계 1</p>
                        <p>테스트 기계 1</p>
                    </Card>
                </Fade>
            </Col>
            <Col span={4}>
                <Fade>
                    <Card className="site-product-cards" cover={<img alt="Product1" src="http://placehold.it/210x210" />} hoverable>
                        <p>테스트 기계 1</p>
                        <p>테스트 기계 1</p>
                    </Card>
                </Fade>
            </Col>
            <Col span={4}>
                <Fade>
                    <Card className="site-product-cards" cover={<img alt="Product1" src="http://placehold.it/210x210" />} hoverable>
                        <p>테스트 기계 1</p>
                        <p>테스트 기계 1</p>
                    </Card>
                </Fade>
            </Col>
            <Col span={4}>
                <Fade>
                    <Card className="site-product-cards" cover={<img alt="Product1" src="http://placehold.it/210x210" />} hoverable>
                        <p>테스트 기계 1</p>
                        <p>테스트 기계 1</p>
                    </Card>
                </Fade>
            </Col>
            <Col span={4} />
        </Row>
            
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Company Name ©2020</Footer>
      </Layout>
  )
}


export default About;