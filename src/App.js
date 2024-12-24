import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PersonnelManagementPage from './pages/PersonnelManagementPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/personnel-management" component={PersonnelManagementPage} />
      </Switch>
    </Router>
  );
};

export default App;
