import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonnelManagementPage from './pages/PersonnelManagementPage';
import ResumePage from './pages/resume/ResumePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/personnel-management" element={<PersonnelManagementPage />} />
        <Route path="/personnel-management/resume/:personnelId" element={<ResumePage />} />
      </Routes>
    </Router>
  );
};

export default App;