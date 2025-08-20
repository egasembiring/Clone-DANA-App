import React from 'react';
import { Table, Tag, Button, Input, Space } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const Users = () => {
  const userData = [
    {
      key: '1',
      id: 1,
      name: 'John Doe',
      phone: '+6281234567890',
      balance: 150000,
      status: 'Active',
      joinDate: '2023-01-15',
      verified: true,
    },
    {
      key: '2',
      id: 2,
      name: 'Jane Smith',
      phone: '+6281234567891',
      balance: 250000,
      status: 'Active',
      joinDate: '2023-02-20',
      verified: true,
    },
    {
      key: '3',
      id: 3,
      name: 'Bob Johnson',
      phone: '+6281234567892',
      balance: 75000,
      status: 'Inactive',
      joinDate: '2023-03-10',
      verified: false,
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Space>
          <UserOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance) => `Rp ${balance.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Verified',
      dataIndex: 'verified',
      key: 'verified',
      render: (verified) => (
        <Tag color={verified ? 'blue' : 'orange'}>
          {verified ? 'VERIFIED' : 'PENDING'}
        </Tag>
      ),
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size="small">View</Button>
          <Button size="small" type="primary">Edit</Button>
          <Button size="small" danger>Block</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>User Management</h1>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search users..."
          prefix={<SearchOutlined />}
          allowClear
        />
        <Button type="primary">Add User</Button>
      </Space>
      <Table dataSource={userData} columns={columns} />
    </div>
  );
};

export default Users;