import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PersonnelManagementPage from './pages/PersonnelManagementPage';
import ResumeManagementPage from './pages/ResumeManagementPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/personnel-management" component={PersonnelManagementPage} />
        <Route path="/resume/:personnelId" component={ResumeManagementPage} />
      </Switch>
    </Router>
  );
};

export default App;