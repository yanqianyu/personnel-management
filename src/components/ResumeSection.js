import React from 'react';
import { Typography, List, Row, Col, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

const ResumeSection = ({ title, data, type }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const renderContent = () => {
    switch (type) {
      case 'education':
        return (
          <List
            itemLayout="vertical"
            dataSource={data}
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
        );

      case 'workExperience':
        return (
          <List
            itemLayout="vertical"
            dataSource={data}
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
        );

      case 'skills':
        return (
          <Paragraph>
            {data.join(', ')}
          </Paragraph>
        );

      case 'certifications':
        return (
          <List
            itemLayout="vertical"
            dataSource={data}
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
        );

      case 'references':
        return (
          <List
            itemLayout="vertical"
            dataSource={data}
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
        );

      default:
        return (
          <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Paragraph>{JSON.stringify(item)}</Paragraph>
              </List.Item>
            )}
          />
        );
    }
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <Title level={3} style={{ color: '#1890ff' }}>{title}</Title>
      {renderContent()}
    </div>
  );
};

export default ResumeSection;