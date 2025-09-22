import React, { useState } from 'react';
import { Card, Button, Space } from 'antd';
import WorkExperienceList from './WorkExperienceList';
import WorkExperienceForm from './WorkExperienceForm';

const WorkExperienceSection = ({ workExperience, onUpdate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);

  const handleAdd = () => {
    setEditingExperience(null);
    setIsAdding(true);
  };

  const handleEdit = (experience) => {
    setEditingExperience(experience);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    const updatedExperience = workExperience.filter(exp => exp.id !== id);
    onUpdate(updatedExperience);
  };

  const handleSave = (values) => {
    if (editingExperience) {
      // Update existing experience
      const updatedExperience = workExperience.map(exp => 
        exp.id === editingExperience.id ? { ...exp, ...values } : exp
      );
      onUpdate(updatedExperience);
    } else {
      // Add new experience
      const newExperience = {
        id: Date.now(), // Simple ID generation
        ...values
      };
      onUpdate([...workExperience, newExperience]);
    }
    setIsAdding(false);
    setEditingExperience(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingExperience(null);
  };

  return (
    <Card 
      title="Work Experience" 
      extra={<Button onClick={handleAdd} type="primary">Add Experience</Button>}
      style={{ marginBottom: '20px' }}
    >
      {isAdding ? (
        <WorkExperienceForm 
          initialValues={editingExperience}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <WorkExperienceList 
          workExperience={workExperience} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </Card>
  );
};

export default WorkExperienceSection;