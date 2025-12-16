import React, { useState } from 'react';
import { List, Input, Button, Checkbox, Space, Typography, Card } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <Title level={2}>Todo List</Title>
        <Space.Compact style={{ width: '100%', marginBottom: '24px' }}>
          <Input
            placeholder="Add a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={addTodo}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={addTodo}>
            Add
          </Button>
        </Space.Compact>
        <List
          dataSource={todos}
          locale={{ emptyText: 'No todos yet' }}
          renderItem={(todo) => (
            <List.Item
              actions={[
                <Button 
                  type="text" 
                  danger 
                  icon={<DeleteOutlined />} 
                  onClick={() => deleteTodo(todo.id)}
                />
              ]}
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              >
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
              </Checkbox>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default TodoListPage;
