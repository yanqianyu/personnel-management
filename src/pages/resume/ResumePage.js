import React, { useState, useEffect } from 'react';
import { message, Spin, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import ResumeHeader from '../../components/resume/ResumeHeader';
import PersonalInfoSection from '../../components/resume/PersonalInfoSection';
import WorkExperienceSection from '../../components/resume/WorkExperienceSection';
import EducationSection from '../../components/resume/EducationSection';
import SkillsSection from '../../components/resume/SkillsSection';
import LanguageSection from '../../components/resume/LanguageSection';
import { fetchResume, updateResume } from '../../api/personnel';

const ResumePage = () => {
  const { personnelId } = useParams();
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResumeData();
  }, [personnelId]);

  const loadResumeData = async () => {
    try {
      setLoading(true);
      const data = await fetchResume(personnelId);
      setResumeData(data);
    } catch (error) {
      message.error('Failed to fetch resume data');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAll = async () => {
    try {
      await updateResume(personnelId, resumeData);
      message.success('Resume updated successfully');
    } catch (error) {
      message.error('Failed to update resume');
    }
  };

  const handleBack = () => {
    navigate('/personnel-management');
  };

  if (loading) {
    return <Spin size="large" />;
  }

  if (!resumeData) {
    return <div>Resume not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={handleBack} style={{ marginRight: '10px' }}>
          Back to Personnel Management
        </Button>
        <Button type="primary" onClick={handleSaveAll}>
          Save All Changes
        </Button>
      </div>
      
      <ResumeHeader 
        name={resumeData.personalInfo?.name}
        department={resumeData.personalInfo?.department}
        position={resumeData.personalInfo?.position}
      />
      
      <PersonalInfoSection 
        personalInfo={resumeData.personalInfo}
        onUpdate={(updatedInfo) => setResumeData({
          ...resumeData,
          personalInfo: updatedInfo
        })}
      />
      
      <WorkExperienceSection 
        workExperience={resumeData.workExperience || []}
        onUpdate={(updatedExperience) => setResumeData({
          ...resumeData,
          workExperience: updatedExperience
        })}
      />
      
      <EducationSection 
        education={resumeData.education || []}
        onUpdate={(updatedEducation) => setResumeData({
          ...resumeData,
          education: updatedEducation
        })}
      />
      
      <SkillsSection 
        skills={resumeData.skills || []}
        onUpdate={(updatedSkills) => setResumeData({
          ...resumeData,
          skills: updatedSkills
        })}
      />
      
      <LanguageSection 
        languages={resumeData.languages || []}
        onUpdate={(updatedLanguages) => setResumeData({
          ...resumeData,
          languages: updatedLanguages
        })}
      />
    </div>
  );
};

export default ResumePage;