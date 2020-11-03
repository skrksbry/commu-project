import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Result, Button } from 'antd';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const { Content, Footer } = Layout;


function NotFound() {
  const { t , i18n } = useTranslation('lang', { useSuspense: false });

  return(
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Result
                status="404"
                title="404"
                subTitle={t("page-not-found")}
                extra={<Button type="primary"><Link to="/">{t("go-to-main")}</Link></Button>}
            />
            
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Company Name ©2020</Footer>
      </Layout>
  );
}


export default NotFound;