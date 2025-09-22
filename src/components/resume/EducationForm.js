import React from 'react';
import { Form, Input, DatePicker, Button, Space } from 'antd';

const { TextArea } = Input;

const EducationForm = ({ initialValues, onSave, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // Format date values
    const formattedValues = {
      ...values,
      startDate: values.startDate ? values.startDate.format('YYYY-MM-DD') : null,
      endDate: values.endDate ? values.endDate.format('YYYY-MM-DD') : null
    };
    onSave(formattedValues);
  };

  return (
    <Form 
      form={form} 
      initialValues={initialValues}
      onFinish={handleSubmit}
      layout="vertical"
    >
      <Form.Item
        name="institution"
        label="Institution"
        rules={[{ required: true, message: 'Please enter the institution name' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="degree"
        label="Degree"
        rules={[{ required: true, message: 'Please enter the degree' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="fieldOfStudy"
        label="Field of Study"
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="startDate"
        label="Start Date"
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      
      <Form.Item
        name="endDate"
        label="End Date"
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      
      <Form.Item
        name="description"
        label="Description"
      >
        <TextArea rows={4} />
      </Form.Item>
      
      <Space>
        <Button type="primary" htmlType="submit">Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Space>
    </Form>
  );
};

export default EducationForm;