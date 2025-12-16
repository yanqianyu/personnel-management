import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PersonnelManagementPage from './pages/PersonnelManagementPage';
import TodoListPage from './pages/TodoListPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/personnel-management" component={PersonnelManagementPage} />
        <Route path="/todo" component={TodoListPage} />
      </Switch>
    </Router>
  );
};

export default App;