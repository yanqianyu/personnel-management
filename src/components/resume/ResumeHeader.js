import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const ResumeHeader = ({ name, department, position }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Title level={2}>{name || 'Unnamed Personnel'}</Title>
      <Text strong>Department: </Text>
      <Text>{department || 'Not specified'}</Text>
      <br />
      <Text strong>Position: </Text>
      <Text>{position || 'Not specified'}</Text>
    </Card>
  );
};

export default ResumeHeader;