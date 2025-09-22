import React from 'react';
import { Form, Input, Select, Button, Space } from 'antd';

const { Option } = Select;

const SkillsForm = ({ initialValues, onSave, onCancel }) => {
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
        label="Skill Name"
        rules={[{ required: true, message: 'Please enter the skill name' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="proficiency"
        label="Proficiency Level"
        rules={[{ required: true, message: 'Please select the proficiency level' }]}
      >
        <Select>
          <Option value="Beginner">Beginner</Option>
          <Option value="Intermediate">Intermediate</Option>
          <Option value="Advanced">Advanced</Option>
          <Option value="Expert">Expert</Option>
        </Select>
      </Form.Item>
      
      <Space>
        <Button type="primary" htmlType="submit">Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Space>
    </Form>
  );
};

export default SkillsForm;