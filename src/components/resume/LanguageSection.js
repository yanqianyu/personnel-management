import React, { useState } from 'react';
import { Card, Button, Space, List, Tag } from 'antd';
import LanguageForm from './LanguageForm';

const LanguageSection = ({ languages, onUpdate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState(null);

  const handleAdd = () => {
    setEditingLanguage(null);
    setIsAdding(true);
  };

  const handleEdit = (language) => {
    setEditingLanguage(language);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    const updatedLanguages = languages.filter(lang => lang.id !== id);
    onUpdate(updatedLanguages);
  };

  const handleSave = (values) => {
    if (editingLanguage) {
      // Update existing language
      const updatedLanguages = languages.map(lang => 
        lang.id === editingLanguage.id ? { ...lang, ...values } : lang
      );
      onUpdate(updatedLanguages);
    } else {
      // Add new language
      const newLanguage = {
        id: Date.now(), // Simple ID generation
        ...values
      };
      onUpdate([...languages, newLanguage]);
    }
    setIsAdding(false);
    setEditingLanguage(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingLanguage(null);
  };

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Basic': return 'default';
      case 'Conversational': return 'blue';
      case 'Fluent': return 'green';
      case 'Native': return 'gold';
      default: return 'default';
    }
  };

  return (
    <Card 
      title="Languages" 
      extra={<Button onClick={handleAdd} type="primary">Add Language</Button>}
      style={{ marginBottom: '20px' }}
    >
      {isAdding ? (
        <LanguageForm 
          initialValues={editingLanguage}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <List
          dataSource={languages}
          renderItem={(language) => (
            <List.Item>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div>
                  <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{language.name || 'Unnamed language'}</span>
                  <Tag color={getProficiencyColor(language.proficiency)}>
                    {language.proficiency || 'Not specified'}
                  </Tag>
                </div>
                <Space>
                  <Button onClick={() => handleEdit(language)}>Edit</Button>
                  <Button danger onClick={() => handleDelete(language.id)}>Delete</Button>
                </Space>
              </div>
            </List.Item>
          )}
        />
      )}
    </Card>
  );
};

export default LanguageSection;