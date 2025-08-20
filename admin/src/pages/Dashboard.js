import React from 'react';
import { Row, Col, Card, Statistic, Table, Tag } from 'antd';
import { UserOutlined, TransactionOutlined, TrophyOutlined } from '@ant-design/icons';

const Dashboard = () => {
  // Mock data
  const recentTransactions = [
    {
      key: '1',
      id: 'TXN001',
      user: 'John Doe',
      type: 'Transfer',
      amount: 50000,
      status: 'Success',
      date: '2023-11-20',
    },
    {
      key: '2',
      id: 'TXN002',
      user: 'Jane Smith',
      type: 'Top Up',
      amount: 100000,
      status: 'Success',
      date: '2023-11-20',
    },
    {
      key: '3',
      id: 'TXN003',
      user: 'Bob Johnson',
      type: 'Payment',
      amount: 25000,
      status: 'Pending',
      date: '2023-11-20',
    },
  ];

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `Rp ${amount.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Success' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={1234}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Transactions"
              value={5678}
              prefix={<TransactionOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Volume"
              value={1234567890}
              prefix="Rp "
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={987}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>
      <Card title="Recent Transactions">
        <Table dataSource={recentTransactions} columns={columns} pagination={false} />
      </Card>
    </div>
  );
};

export default Dashboard;