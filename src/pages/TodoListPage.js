import React, { useState, useEffect } from 'react';
import { List, Input, Button, Checkbox, Space, message } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../api/todo';

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      message.error('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!inputValue.trim()) {
      message.warning('Please enter a todo item');
      return;
    }

    try {
      const newTodo = await addTodo({
        title: inputValue,
        completed: false,
        createdAt: new Date().toISOString()
      });
      setTodos([...todos, newTodo]);
      setInputValue('');
      message.success('Todo added successfully');
    } catch (error) {
      message.error('Failed to add todo');
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      await updateTodo(id, { completed: !completed });
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !completed } : todo
      ));
    } catch (error) {
      message.error('Failed to update todo');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
      message.success('Todo deleted successfully');
    } catch (error) {
      message.error('Failed to delete todo');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: 20 }}>
      <h1>Todo List</h1>
      <Space.Compact style={{ width: '100%', marginBottom: 20 }}>
        <Input
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleAdd}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          Add
        </Button>
      </Space.Compact>

      <List
        loading={loading}
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(item.id)}
              />
            ]}
          >
            <Checkbox
              checked={item.completed}
              onChange={() => handleToggle(item.id, item.completed)}
            >
              <span style={{ 
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? '#999' : '#000'
              }}>
                {item.title}
              </span>
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListPage;
