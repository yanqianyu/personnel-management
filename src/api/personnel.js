import axios from 'axios';

const API_URL = 'https://api.example.com/personnel';

export const fetchPersonnel = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch personnel data');
  }
};

export const addPersonnel = async (personnel) => {
  try {
    const response = await axios.post(API_URL, personnel);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add personnel');
  }
};

export const editPersonnel = async (id, personnel) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, personnel);
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit personnel');
  }
};

export const deletePersonnel = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete personnel');
  }
};

// Resume API functions
export const fetchResume = async (personnelId) => {
  try {
    // In a real implementation, this would fetch from a resume endpoint
    // For now, we'll return mock data with the expected structure
    return {
      id: personnelId,
      personnelId: personnelId,
      personalInfo: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 8900",
        address: "123 Main St, City, Country",
        department: "Engineering",
        position: "Senior Developer"
      },
      workExperience: [
        {
          id: 1,
          company: "Tech Corp",
          position: "Senior Developer",
          startDate: "2020-01-01",
          endDate: null,
          description: "Leading development of web applications"
        },
        {
          id: 2,
          company: "Startup Inc",
          position: "Developer",
          startDate: "2018-03-01",
          endDate: "2019-12-31",
          description: "Developed mobile applications"
        }
      ],
      education: [
        {
          id: 1,
          institution: "University of Technology",
          degree: "Master of Science",
          fieldOfStudy: "Computer Science",
          startDate: "2016-09-01",
          endDate: "2018-06-01",
          description: "Specialized in Software Engineering"
        }
      ],
      skills: [
        {
          id: 1,
          name: "JavaScript",
          proficiency: "Advanced"
        },
        {
          id: 2,
          name: "React",
          proficiency: "Expert"
        }
      ],
      languages: [
        {
          id: 1,
          name: "English",
          proficiency: "Fluent"
        },
        {
          id: 2,
          name: "Spanish",
          proficiency: "Conversational"
        }
      ]
    };
  } catch (error) {
    throw new Error('Failed to fetch resume data');
  }
};

export const updateResume = async (personnelId, resumeData) => {
  try {
    // In a real implementation, this would update the resume endpoint
    console.log('Updating resume for personnel:', personnelId, resumeData);
    return resumeData;
  } catch (error) {
    throw new Error('Failed to update resume');
  }
};

export const addWorkExperience = async (personnelId, experience) => {
  try {
    // In a real implementation, this would add work experience
    console.log('Adding work experience for personnel:', personnelId, experience);
    return { ...experience, id: Date.now() };
  } catch (error) {
    throw new Error('Failed to add work experience');
  }
};

export const updateWorkExperience = async (personnelId, experienceId, experience) => {
  try {
    // In a real implementation, this would update work experience
    console.log('Updating work experience for personnel:', personnelId, experienceId, experience);
    return experience;
  } catch (error) {
    throw new Error('Failed to update work experience');
  }
};

export const deleteWorkExperience = async (personnelId, experienceId) => {
  try {
    // In a real implementation, this would delete work experience
    console.log('Deleting work experience for personnel:', personnelId, experienceId);
  } catch (error) {
    throw new Error('Failed to delete work experience');
  }
};