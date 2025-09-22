import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message } from 'antd';
import { Link } from 'react-router-dom';
import PersonnelForm from '../components/PersonnelForm';
import { fetchPersonnel, addPersonnel, editPersonnel, deletePersonnel } from '../api/personnel';

const PersonnelManagementPage = () => {
  const [personnelData, setPersonnelData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPersonnel, setEditingPersonnel] = useState(null);

  useEffect(() => {
    loadPersonnelData();
  }, []);

  const loadPersonnelData = async () => {
    try {
      const data = await fetchPersonnel();
      setPersonnelData(data);
    } catch (error) {
      message.error('Failed to fetch personnel data');
    }
  };

  const handleAdd = () => {
    setEditingPersonnel(null);
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingPersonnel(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deletePersonnel(id);
      message.success('Personnel deleted successfully');
      loadPersonnelData();
    } catch (error) {
      message.error('Failed to delete personnel');
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      if (editingPersonnel) {
        await editPersonnel(editingPersonnel.id, values);
        message.success('Personnel updated successfully');
      } else {
        await addPersonnel(values);
        message.success('Personnel added successfully');
      }
      setIsModalVisible(false);
      loadPersonnelData();
    } catch (error) {
      message.error('Failed to submit personnel data');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEdit(record)} style={{ marginRight: '8px' }}>Edit</Button>
          <Button onClick={() => handleDelete(record.id)} danger style={{ marginRight: '8px' }}>Delete</Button>
          <Link to={`/personnel-management/resume/${record.id}`}>
            <Button>View Resume</Button>
          </Link>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: '16px' }}>Add Personnel</Button>
      <Table columns={columns} dataSource={personnelData} rowKey="id" />
      <Modal
        title={editingPersonnel ? 'Edit Personnel' : 'Add Personnel'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <PersonnelForm
          initialValues={editingPersonnel}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default PersonnelManagementPage;