import React, { Component, useState, useEffect } from 'react';
import LayTopBanner from './Layout/LayTopBanner';
import 'antd/dist/antd.css';
import './index.css';
import Fade from "react-reveal/Fade";
import { Layout,Row, Card, Space, Timeline } from 'antd';
import { useTranslation } from 'react-i18next'

const { Content, Footer } = Layout;
const pagename = "about";

function About() {  
  const { t , i18n } = useTranslation('lang', { useSuspense: false });
  return (
      <Layout className="layout">
        <LayTopBanner title={t(pagename)} />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
          <Row>
            <Space direction="vertical" style={{ textAlign: "center" , width: "100%"}}>
            <Fade cascade>
              <Timeline mode="left">
                
                  <Timeline.Item label="2015-09-01">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item>{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>
                  <Timeline.Item label="2015-09-01 09:12:11">{t("test-comment")}</Timeline.Item>

              </Timeline> 
            </Fade>
            </Space>
          </Row>
            
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Company Name ©2020</Footer>
      </Layout>
  )
}


export default About;