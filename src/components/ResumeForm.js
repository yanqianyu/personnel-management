import React from 'react';
import { Form, Input, Button, DatePicker, Row, Col, Typography, Divider, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const ResumeForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // Transform the education and work experience arrays to match the data model
    const transformedValues = {
      ...values,
      education: values.education || [],
      workExperience: values.workExperience || [],
      skills: values.skills || [],
      certifications: values.certifications || [],
      references: values.references || []
    };
    onSubmit(transformedValues);
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleFinish}
      layout="vertical"
    >
      {/* Personal Information Section */}
      <Title level={4}>Personal Information</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name={['personalInfo', 'fullName']}
            label="Full Name"
            rules={[{ required: true, message: 'Please enter the full name' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={['personalInfo', 'email']}
            label="Email"
            rules={[{ required: true, message: 'Please enter the email' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name={['personalInfo', 'phone']}
            label="Phone"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={['personalInfo', 'address']}
            label="Address"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item
        name={['personalInfo', 'summary']}
        label="Professional Summary"
      >
        <TextArea rows={4} />
      </Form.Item>
      
      <Divider />
      
      {/* Education Section */}
      <Title level={4}>Education History</Title>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} style={{ marginBottom: 20, padding: 10, border: '1px solid #f0f0f0', borderRadius: 5 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'institution']}
                      fieldKey={[fieldKey, 'institution']}
                      label="Institution"
                      rules={[{ required: true, message: 'Please enter the institution' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'degree']}
                      fieldKey={[fieldKey, 'degree']}
                      label="Degree"
                      rules={[{ required: true, message: 'Please enter the degree' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'fieldOfStudy']}
                      fieldKey={[fieldKey, 'fieldOfStudy']}
                      label="Field of Study"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'startDate']}
                      fieldKey={[fieldKey, 'startDate']}
                      label="Start Date"
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'endDate']}
                      fieldKey={[fieldKey, 'endDate']}
                      label="End Date"
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  {...restField}
                  name={[name, 'description']}
                  fieldKey={[fieldKey, 'description']}
                  label="Description"
                >
                  <TextArea rows={2} />
                </Form.Item>
                
                <Button 
                  type="danger" 
                  icon={<DeleteOutlined />} 
                  onClick={() => remove(name)}
                  style={{ marginBottom: 10 }}
                >
                  Remove Education
                </Button>
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      <Divider />
      
      {/* Work Experience Section */}
      <Title level={4}>Work Experience</Title>
      <Form.List name="workExperience">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} style={{ marginBottom: 20, padding: 10, border: '1px solid #f0f0f0', borderRadius: 5 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'company']}
                      fieldKey={[fieldKey, 'company']}
                      label="Company"
                      rules={[{ required: true, message: 'Please enter the company' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'position']}
                      fieldKey={[fieldKey, 'position']}
                      label="Position"
                      rules={[{ required: true, message: 'Please enter the position' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'startDate']}
                      fieldKey={[fieldKey, 'startDate']}
                      label="Start Date"
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name={[name, 'endDate']}
                      fieldKey={[fieldKey, 'endDate']}
                      label="End Date"
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  {...restField}
                  name={[name, 'responsibilities']}
                  fieldKey={[fieldKey, 'responsibilities']}
                  label="Responsibilities"
                >
                  <TextArea rows={3} placeholder="Enter responsibilities, one per line" />
                </Form.Item>
                
                <Form.Item
                  {...restField}
                  name={[name, 'achievements']}
                  fieldKey={[fieldKey, 'achievements']}
                  label="Key Achievements"
                >
                  <TextArea rows={3} placeholder="Enter achievements, one per line" />
                </Form.Item>
                
                <Button 
                  type="danger" 
                  icon={<DeleteOutlined />} 
                  onClick={() => remove(name)}
                  style={{ marginBottom: 10 }}
                >
                  Remove Experience
                </Button>
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Work Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      <Divider />
      
      {/* Skills Section */}
      <Title level={4}>Skills</Title>
      <Form.Item name="skills" label="Skills">
        <Input placeholder="Enter skills separated by commas" />
      </Form.Item>
      
      <Divider />
      
      {/* Certifications Section */}
      <Title level={4}>Certifications</Title>
      <Form.List name="certifications">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} style={{ marginBottom: 20, padding: 10, border: '1px solid #f0f0f0', borderRadius: 5 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      fieldKey={[fieldKey, 'name']}
                      label="Certification Name"
                      rules={[{ required: true, message: 'Please enter the certification name' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'issuer']}
                      fieldKey={[fieldKey, 'issuer']}
                      label="Issuer"
                      rules={[{ required: true, message: 'Please enter the issuer' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'date']}
                      fieldKey={[fieldKey, 'date']}
                      label="Date"
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Button 
                  type="danger" 
                  icon={<DeleteOutlined />} 
                  onClick={() => remove(name)}
                  style={{ marginBottom: 10 }}
                >
                  Remove Certification
                </Button>
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Certification
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      <Divider />
      
      {/* References Section */}
      <Title level={4}>References</Title>
      <Form.List name="references">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} style={{ marginBottom: 20, padding: 10, border: '1px solid #f0f0f0', borderRadius: 5 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      fieldKey={[fieldKey, 'name']}
                      label="Reference Name"
                      rules={[{ required: true, message: 'Please enter the reference name' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'relationship']}
                      fieldKey={[fieldKey, 'relationship']}
                      label="Relationship"
                      rules={[{ required: true, message: 'Please enter the relationship' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'email']}
                      fieldKey={[fieldKey, 'email']}
                      label="Email"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'phone']}
                      fieldKey={[fieldKey, 'phone']}
                      label="Phone"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Button 
                  type="danger" 
                  icon={<DeleteOutlined />} 
                  onClick={() => remove(name)}
                  style={{ marginBottom: 10 }}
                >
                  Remove Reference
                </Button>
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Reference
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Resume
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;