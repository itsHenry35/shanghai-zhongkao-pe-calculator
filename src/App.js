import React from 'react';
import { Layout, Typography } from 'antd';
import PECalculator from './components/PECalculator';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout" style={{ minHeight: '100vh', background: '#fff' }}>
  <Header style={{ background: '#1890ff', padding: '0 20px' }}>
    <Title level={3} style={{ color: 'white', margin: '15px 0' }}>
      上海体育中考成绩计算器
    </Title>
  </Header>
  <Content style={{ padding: '0', background: '#fff' }}>
    <div style={{ padding: 16, minHeight: 280 }}>
      <PECalculator />
    </div>
  </Content>
  <Footer style={{ textAlign: 'center', background: '#f0f2f5', padding: '10px 0' }}>
    上海体育中考成绩计算器
  </Footer>
</Layout>
  );
}

export default App;