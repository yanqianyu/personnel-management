import React from 'react';
import { Form, Input, Select, Button, Space } from 'antd';

const { Option } = Select;

const LanguageForm = ({ initialValues, onSave, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSave(values);
  };

  return (
    <Form 
      form={form} 
      initialValues={initialValues}
      onFinish={handleSubmit}
      layout="vertical"
    >
      <Form.Item
        name="name"
        label="Language"
        rules={[{ required: true, message: 'Please enter the language name' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="proficiency"
        label="Proficiency Level"
        rules={[{ required: true, message: 'Please select the proficiency level' }]}
      >
        <Select>
          <Option value="Basic">Basic</Option>
          <Option value="Conversational">Conversational</Option>
          <Option value="Fluent">Fluent</Option>
          <Option value="Native">Native</Option>
        </Select>
      </Form.Item>
      
      <Space>
        <Button type="primary" htmlType="submit">Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Space>
    </Form>
  );
};

export default LanguageForm;