import React from 'react';
import { List, Card, Button, Space, Typography } from 'antd';

const { Text } = Typography;

const WorkExperienceList = ({ workExperience, onEdit, onDelete }) => {
  return (
    <List
      dataSource={workExperience}
      renderItem={(experience) => (
        <List.Item>
          <Card style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Text strong>{experience.company || 'Company not specified'}</Text>
                <br />
                <Text>{experience.position || 'Position not specified'}</Text>
                <br />
                <Text type="secondary">
                  {experience.startDate ? new Date(experience.startDate).toLocaleDateString() : ''} - 
                  {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : 'Present'}
                </Text>
                <br />
                <Text>{experience.description || ''}</Text>
              </div>
              <Space>
                <Button onClick={() => onEdit(experience)}>Edit</Button>
                <Button danger onClick={() => onDelete(experience.id)}>Delete</Button>
              </Space>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default WorkExperienceList;