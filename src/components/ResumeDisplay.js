import React from 'react';
import { Typography, Divider, Row, Col, List } from 'antd';

const { Title, Text, Paragraph } = Typography;

const ResumeDisplay = ({ resumeData }) => {
  if (!resumeData) {
    return <div>No resume data available</div>;
  }

  const {
    personalInfo,
    education,
    workExperience,
    skills,
    certifications,
    references
  } = resumeData;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Personal Information Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Title level={2} style={{ marginBottom: '5px' }}>
          {personalInfo?.fullName || 'Full Name'}
        </Title>
        <Text type="secondary">
          {personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}
        </Text>
        <Paragraph style={{ marginTop: '15px', fontSize: '16px' }}>
          {personalInfo?.summary}
        </Paragraph>
      </div>

      <Divider />

      {/* Education Section */}
      <div style={{ marginBottom: '30px' }}>
        <Title level={3} style={{ color: '#1890ff' }}>Education</Title>
        <List
          itemLayout="vertical"
          dataSource={education || []}
          renderItem={(item) => (
            <List.Item>
              <Row gutter={16}>
                <Col span={16}>
                  <Title level={4} style={{ margin: 0 }}>{item.institution}</Title>
                  <Text strong>{item.degree}, {item.fieldOfStudy}</Text>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                  <Text type="secondary">
                    {item.startDate ? new Date(item.startDate).getFullYear() : ''} - 
                    {item.endDate ? new Date(item.endDate).getFullYear() : 'Present'}
                  </Text>
                </Col>
              </Row>
              <Paragraph style={{ marginTop: '10px' }}>{item.description}</Paragraph>
            </List.Item>
          )}
        />
      </div>

      <Divider />

      {/* Work Experience Section */}
      <div style={{ marginBottom: '30px' }}>
        <Title level={3} style={{ color: '#1890ff' }}>Work Experience</Title>
        <List
          itemLayout="vertical"
          dataSource={workExperience || []}
          renderItem={(item) => (
            <List.Item>
              <Row gutter={16}>
                <Col span={16}>
                  <Title level={4} style={{ margin: 0 }}>{item.position}</Title>
                  <Text strong>{item.company}</Text>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                  <Text type="secondary">
                    {item.startDate ? new Date(item.startDate).getFullYear() : ''} - 
                    {item.endDate ? new Date(item.endDate).getFullYear() : 'Present'}
                  </Text>
                </Col>
              </Row>
              {item.responsibilities && item.responsibilities.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <Text strong>Responsibilities:</Text>
                  <List
                    size="small"
                    dataSource={item.responsibilities}
                    renderItem={(responsibility) => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>{responsibility}</Text>
                      </List.Item>
                    )}
                  />
                </div>
              )}
              {item.achievements && item.achievements.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <Text strong>Achievements:</Text>
                  <List
                    size="small"
                    dataSource={item.achievements}
                    renderItem={(achievement) => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>{achievement}</Text>
                      </List.Item>
                    )}
                  />
                </div>
              )}
            </List.Item>
          )}
        />
      </div>

      <Divider />

      {/* Skills Section */}
      <div style={{ marginBottom: '30px' }}>
        <Title level={3} style={{ color: '#1890ff' }}>Skills</Title>
        <Paragraph>
          {skills && skills.length > 0 ? skills.join(', ') : 'No skills listed'}
        </Paragraph>
      </div>

      <Divider />

      {/* Certifications Section */}
      <div style={{ marginBottom: '30px' }}>
        <Title level={3} style={{ color: '#1890ff' }}>Certifications</Title>
        <List
          itemLayout="vertical"
          dataSource={certifications || []}
          renderItem={(item) => (
            <List.Item>
              <Row gutter={16}>
                <Col span={16}>
                  <Title level={4} style={{ margin: 0 }}>{item.name}</Title>
                  <Text strong>{item.issuer}</Text>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                  <Text type="secondary">
                    {item.date ? new Date(item.date).getFullYear() : ''}
                  </Text>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </div>

      <Divider />

      {/* References Section */}
      <div>
        <Title level={3} style={{ color: '#1890ff' }}>References</Title>
        <List
          itemLayout="vertical"
          dataSource={references || []}
          renderItem={(item) => (
            <List.Item>
              <Title level={4} style={{ margin: 0 }}>{item.name}</Title>
              <Text strong>{item.relationship}</Text>
              <br />
              <Text>Email: {item.email}</Text>
              <br />
              <Text>Phone: {item.phone}</Text>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ResumeDisplay;