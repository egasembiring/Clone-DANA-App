import React from 'react';
import { Card, Form, Input, Button, Switch, Select, InputNumber, Divider, Space } from 'antd';

const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Settings updated:', values);
    // Handle form submission
  };

  return (
    <div>
      <h1>Settings</h1>
      
      <Card title="General Settings" style={{ marginBottom: 16 }}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Application Name"
            name="appName"
            initialValue="DANAIN"
            rules={[{ required: true, message: 'Please input application name!' }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Support Email"
            name="supportEmail"
            initialValue="support@danain.com"
            rules={[{ required: true, type: 'email', message: 'Please input valid email!' }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Maintenance Mode"
            name="maintenanceMode"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Form>
      </Card>

      <Card title="Transaction Settings" style={{ marginBottom: 16 }}>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Minimum Transfer Amount"
            name="minTransferAmount"
            initialValue={10000}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/Rp\s?|(,*)/g, '')}
            />
          </Form.Item>
          
          <Form.Item
            label="Maximum Transfer Amount"
            name="maxTransferAmount"
            initialValue={10000000}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/Rp\s?|(,*)/g, '')}
            />
          </Form.Item>
          
          <Form.Item
            label="Transfer Fee Percentage"
            name="transferFeePercentage"
            initialValue={0.5}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              max={5}
              step={0.1}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace('%', '')}
            />
          </Form.Item>
        </Form>
      </Card>

      <Card title="Security Settings" style={{ marginBottom: 16 }}>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Session Timeout (minutes)"
            name="sessionTimeout"
            initialValue={30}
          >
            <InputNumber style={{ width: '100%' }} min={5} max={1440} />
          </Form.Item>
          
          <Form.Item
            label="Maximum Login Attempts"
            name="maxLoginAttempts"
            initialValue={5}
          >
            <InputNumber style={{ width: '100%' }} min={3} max={10} />
          </Form.Item>
          
          <Form.Item
            label="Require Email Verification"
            name="emailVerification"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch />
          </Form.Item>
          
          <Form.Item
            label="Require Phone Verification"
            name="phoneVerification"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch />
          </Form.Item>
        </Form>
      </Card>

      <Space>
        <Button type="primary" size="large" onClick={() => form.submit()}>
          Save Settings
        </Button>
        <Button size="large">
          Reset to Default
        </Button>
      </Space>
    </div>
  );
};

export default Settings;