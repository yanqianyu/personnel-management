import React, { useState } from 'react';
import { Card, Button, Space } from 'antd';
import EducationList from './EducationList';
import EducationForm from './EducationForm';

const EducationSection = ({ education, onUpdate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingEducation, setEditingEducation] = useState(null);

  const handleAdd = () => {
    setEditingEducation(null);
    setIsAdding(true);
  };

  const handleEdit = (edu) => {
    setEditingEducation(edu);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    const updatedEducation = education.filter(edu => edu.id !== id);
    onUpdate(updatedEducation);
  };

  const handleSave = (values) => {
    if (editingEducation) {
      // Update existing education
      const updatedEducation = education.map(edu => 
        edu.id === editingEducation.id ? { ...edu, ...values } : edu
      );
      onUpdate(updatedEducation);
    } else {
      // Add new education
      const newEducation = {
        id: Date.now(), // Simple ID generation
        ...values
      };
      onUpdate([...education, newEducation]);
    }
    setIsAdding(false);
    setEditingEducation(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingEducation(null);
  };

  return (
    <Card 
      title="Education" 
      extra={<Button onClick={handleAdd} type="primary">Add Education</Button>}
      style={{ marginBottom: '20px' }}
    >
      {isAdding ? (
        <EducationForm 
          initialValues={editingEducation}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <EducationList 
          education={education} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </Card>
  );
};

export default EducationSection;