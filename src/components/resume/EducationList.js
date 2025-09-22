import React from 'react';
import { List, Card, Button, Space, Typography } from 'antd';

const { Text } = Typography;

const EducationList = ({ education, onEdit, onDelete }) => {
  return (
    <List
      dataSource={education}
      renderItem={(edu) => (
        <List.Item>
          <Card style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Text strong>{edu.institution || 'Institution not specified'}</Text>
                <br />
                <Text>{edu.degree || 'Degree not specified'}</Text>
                <br />
                <Text type="secondary">
                  {edu.startDate ? new Date(edu.startDate).toLocaleDateString() : ''} - 
                  {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : 'Present'}
                </Text>
                <br />
                <Text>{edu.description || ''}</Text>
              </div>
              <Space>
                <Button onClick={() => onEdit(edu)}>Edit</Button>
                <Button danger onClick={() => onDelete(edu.id)}>Delete</Button>
              </Space>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default EducationList;