import React from 'react';
import { Table, Tag, Button, Input, Space, DatePicker } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const Transactions = () => {
  const transactionData = [
    {
      key: '1',
      id: 'TXN001',
      user: 'John Doe',
      type: 'Transfer',
      amount: 50000,
      recipient: 'Jane Smith',
      status: 'Success',
      date: '2023-11-20 10:30:00',
      fee: 2500,
    },
    {
      key: '2',
      id: 'TXN002',
      user: 'Jane Smith',
      type: 'Top Up',
      amount: 100000,
      recipient: '-',
      status: 'Success',
      date: '2023-11-20 14:20:00',
      fee: 0,
    },
    {
      key: '3',
      id: 'TXN003',
      user: 'Bob Johnson',
      type: 'Payment',
      amount: 25000,
      recipient: 'Merchant ABC',
      status: 'Pending',
      date: '2023-11-20 09:15:00',
      fee: 1000,
    },
    {
      key: '4',
      id: 'TXN004',
      user: 'Alice Brown',
      type: 'Withdrawal',
      amount: 75000,
      recipient: 'Bank BCA',
      status: 'Failed',
      date: '2023-11-19 16:45:00',
      fee: 5000,
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
      render: (type) => {
        const colors = {
          Transfer: 'blue',
          'Top Up': 'green',
          Payment: 'orange',
          Withdrawal: 'purple',
        };
        return <Tag color={colors[type]}>{type}</Tag>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `Rp ${amount.toLocaleString()}`,
    },
    {
      title: 'Recipient',
      dataIndex: 'recipient',
      key: 'recipient',
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      key: 'fee',
      render: (fee) => fee > 0 ? `Rp ${fee.toLocaleString()}` : 'Free',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const colors = {
          Success: 'green',
          Pending: 'orange',
          Failed: 'red',
        };
        return <Tag color={colors[status]}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Date & Time',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size="small">View</Button>
          {record.status === 'Pending' && (
            <>
              <Button size="small" type="primary">Approve</Button>
              <Button size="small" danger>Reject</Button>
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Transaction Management</h1>
      <Space style={{ marginBottom: 16 }} wrap>
        <Input
          placeholder="Search transactions..."
          prefix={<SearchOutlined />}
          allowClear
          style={{ width: 200 }}
        />
        <RangePicker />
        <Button icon={<FilterOutlined />}>Filter</Button>
        <Button type="primary">Export</Button>
      </Space>
      <Table 
        dataSource={transactionData} 
        columns={columns} 
        scroll={{ x: 1200 }}
      />
    </div>
  );
};

export default Transactions;