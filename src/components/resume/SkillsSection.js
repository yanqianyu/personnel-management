import React, { useState } from 'react';
import { Card, Button, Space, List, Tag } from 'antd';
import SkillsForm from './SkillsForm';

const SkillsSection = ({ skills, onUpdate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);

  const handleAdd = () => {
    setEditingSkill(null);
    setIsAdding(true);
  };

  const handleEdit = (skill) => {
    setEditingSkill(skill);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    const updatedSkills = skills.filter(skill => skill.id !== id);
    onUpdate(updatedSkills);
  };

  const handleSave = (values) => {
    if (editingSkill) {
      // Update existing skill
      const updatedSkills = skills.map(skill => 
        skill.id === editingSkill.id ? { ...skill, ...values } : skill
      );
      onUpdate(updatedSkills);
    } else {
      // Add new skill
      const newSkill = {
        id: Date.now(), // Simple ID generation
        ...values
      };
      onUpdate([...skills, newSkill]);
    }
    setIsAdding(false);
    setEditingSkill(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingSkill(null);
  };

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Beginner': return 'default';
      case 'Intermediate': return 'blue';
      case 'Advanced': return 'green';
      case 'Expert': return 'gold';
      default: return 'default';
    }
  };

  return (
    <Card 
      title="Skills" 
      extra={<Button onClick={handleAdd} type="primary">Add Skill</Button>}
      style={{ marginBottom: '20px' }}
    >
      {isAdding ? (
        <SkillsForm 
          initialValues={editingSkill}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <List
          dataSource={skills}
          renderItem={(skill) => (
            <List.Item>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>
                  <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{skill.name || 'Unnamed skill'}</span>
                  <Tag color={getProficiencyColor(skill.proficiency)}>
                    {skill.proficiency || 'Not specified'}
                  </Tag>
                </div>
                <Space>
                  <Button onClick={() => handleEdit(skill)}>Edit</Button>
                  <Button danger onClick={() => handleDelete(skill.id)}>Delete</Button>
                </Space>
              </div>
            </List.Item>
          )}
        />
      )}
    </Card>
  );
};

export default SkillsSection;