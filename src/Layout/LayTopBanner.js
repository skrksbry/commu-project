import React, { Component, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import banner2 from "../res/testBanner.jpg";
import Fade from "react-reveal/Fade";
import { Row, Col} from 'antd';

function LayTopBanner(props){
    return(
        <Row>
            <Col span={24} className="site-top-bg" style={{backgroundImage:`url(${banner2})`}}>
                <Fade>
                    <h3 className="site-page-title">{props.title}</h3>
                </Fade>
            </Col>
        </Row>
    );

}

export default LayTopBanner;