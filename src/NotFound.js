import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Result, Button } from 'antd';
import Routers from "./Routes/Router";
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;

const NotFound = () => (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Result
                status="404"
                title="404"
                subTitle="페이지를 찾을수 없습니다."
                extra={<Button type="primary"><Link to="/">메인으로 돌아가기</Link></Button>}
            />
            
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Company Name ©2020</Footer>
      </Layout>
  )


export default NotFound;