import { HomeOutlined, SkinOutlined, BarChartOutlined} from '@ant-design/icons';
import { NavLink, Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    label: <NavLink to='/home'>Home</NavLink>,
    key: 'Home',
    icon: <HomeOutlined />
  },
  {
    label: <NavLink to='/modelo'>Modelos</NavLink>,
    key: 'Modelos',
    icon: <SkinOutlined />
  },
  {
    label: <NavLink to='/visualizar'>Visualizar Datos</NavLink>,
    key: 'Visualizar',
    icon: <BarChartOutlined />
  }
]

export function ISLayout(){
      const [collapsed, setCollapsed] = useState(false);
      const {
        token: { colorBgContainer },
      } = theme.useToken();
      return (
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
              style={{
                height: 32,
                margin: 16,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            > <img src=''></img></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout className="site-layout">
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            />
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              >
                <Breadcrumb.Item>Usuario</Breadcrumb.Item>
                <Breadcrumb.Item>More</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                <Outlet/>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Ingenieria de Software - Grupo 16
            </Footer>
          </Layout>
        </Layout>
      );
}