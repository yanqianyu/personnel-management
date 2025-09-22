import React, { useState } from 'react';
import { Card, Form, Input, Button, Space } from 'antd';

const PersonalInfoSection = ({ personalInfo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const handleEdit = () => {
    form.setFieldsValue(personalInfo || {});
    setIsEditing(true);
  };

  const handleSave = () => {
    form.validateFields().then(values => {
      onUpdate(values);
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsEditing(false);
  };

  return (
    <Card 
      title="Personal Information" 
      extra={
        !isEditing ? (
          <Button onClick={handleEdit}>Edit</Button>
        ) : (
          <Space>
            <Button onClick={handleSave} type="primary">Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Space>
        )
      }
      style={{ marginBottom: '20px' }}
    >
      {!isEditing ? (
        <div>
          <p><strong>Name:</strong> {personalInfo?.name || 'Not specified'}</p>
          <p><strong>Email:</strong> {personalInfo?.email || 'Not specified'}</p>
          <p><strong>Phone:</strong> {personalInfo?.phone || 'Not specified'}</p>
          <p><strong>Address:</strong> {personalInfo?.address || 'Not specified'}</p>
        </div>
      ) : (
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter the email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      )}
    </Card>
  );
};

export default PersonalInfoSection;