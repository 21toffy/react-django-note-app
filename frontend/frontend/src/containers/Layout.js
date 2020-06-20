import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Books</Menu.Item>
                    <Menu.Item key="2"><Link to = '/'>Articles</Link></Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to = '/'>Home</Link></Breadcrumb.Item>
                    {/* <Breadcrumb.Item><Link to = '/blog'>List</Link></Breadcrumb.Item> */}
                </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>

        </Layout>

    );
}

export default CustomLayout