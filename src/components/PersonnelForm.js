import React from 'react';
import { Form, Input, Button } from 'antd';

const PersonnelForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleFinish}
      layout="vertical"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter the name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[{ required: true, message: 'Please enter the age' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="department"
        label="Department"
        rules={[{ required: true, message: 'Please enter the department' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonnelForm;
