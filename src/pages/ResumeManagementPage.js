import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, message, Button } from 'antd';
import ResumeForm from '../components/ResumeForm';
import ResumeDisplay from '../components/ResumeDisplay';
import ResumeSection from '../components/ResumeSection';
import { fetchResumeById, addResume, editResume } from '../api/resume';

const { TabPane } = Tabs;

const ResumeManagementPage = () => {
  const { personnelId } = useParams();
  const [resumeData, setResumeData] = useState(null);
  const [activeTab, setActiveTab] = useState('display');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (personnelId) {
      loadResumeData(personnelId);
    }
  }, [personnelId]);

  const loadResumeData = async (id) => {
    setLoading(true);
    try {
      const data = await fetchResumeById(id);
      setResumeData(data);
    } catch (error) {
      message.error('Failed to fetch resume data');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      // Add personnelId to the resume data
      const resumeWithPersonnelId = {
        ...values,
        personnelId: personnelId
      };

      if (resumeData && resumeData.id) {
        // Edit existing resume
        await editResume(resumeData.id, resumeWithPersonnelId);
        message.success('Resume updated successfully');
      } else {
        // Create new resume
        const newResume = await addResume(resumeWithPersonnelId);
        setResumeData(newResume);
        message.success('Resume created successfully');
      }
      
      // Reload the resume data
      if (personnelId) {
        loadResumeData(personnelId);
      }
      
      // Switch to display tab
      setActiveTab('display');
    } catch (error) {
      message.error('Failed to submit resume data');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => {
    setActiveTab('form');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Resume Display" key="display">
          {resumeData ? (
            <>
              <Button 
                type="primary" 
                onClick={handleEditClick} 
                style={{ marginBottom: '20px' }}
              >
                Edit Resume
              </Button>
              <ResumeDisplay resumeData={resumeData} />
            </>
          ) : (
            <div>
              <p>No resume data found for this personnel.</p>
              <Button 
                type="primary" 
                onClick={() => setActiveTab('form')}
              >
                Create Resume
              </Button>
            </div>
          )}
        </TabPane>
        <TabPane tab="Resume Form" key="form">
          <ResumeForm
            initialValues={resumeData}
            onSubmit={handleFormSubmit}
          />
        </TabPane>
        <TabPane tab="Section View" key="section">
          {resumeData ? (
            <>
              <Button 
                type="primary" 
                onClick={handleEditClick} 
                style={{ marginBottom: '20px' }}
              >
                Edit Resume
              </Button>
              <ResumeSection 
                title="Personal Information" 
                data={[resumeData.personalInfo]} 
                type="personalInfo" 
              />
              <ResumeSection 
                title="Education" 
                data={resumeData.education} 
                type="education" 
              />
              <ResumeSection 
                title="Work Experience" 
                data={resumeData.workExperience} 
                type="workExperience" 
              />
              <ResumeSection 
                title="Skills" 
                data={resumeData.skills} 
                type="skills" 
              />
              <ResumeSection 
                title="Certifications" 
                data={resumeData.certifications} 
                type="certifications" 
              />
              <ResumeSection 
                title="References" 
                data={resumeData.references} 
                type="references" 
              />
            </>
          ) : (
            <div>
              <p>No resume data found for this personnel.</p>
              <Button 
                type="primary" 
                onClick={() => setActiveTab('form')}
              >
                Create Resume
              </Button>
            </div>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ResumeManagementPage;