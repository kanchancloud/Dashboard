import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;


const Sidebars = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu className="sideList" theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{marginTop:"20px"}}>
                   <ul  style={{display:"flex",flexDirection: "column", rowGap:"50px",}}>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><UserOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><VideoCameraOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><UploadOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><BarChartOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><CloudOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><AppstoreOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/" style={{textDecoration:"none",color:"white"}}>
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><TeamOutlined/>dashboard 1</li>
                       </a>
                       <a href="https://cybersrcc.com/"  style={{textDecoration:"none",color:"white"}} >
                       <li style={{display:"flex",gap: 20,alignItems: "center", justifyContent: "center"}}><ShopOutlined/>dashboard 1</li>
                       </a>
                   </ul>
                </Menu>
            </Sider>
        </Layout>
    );
};
export default Sidebars;