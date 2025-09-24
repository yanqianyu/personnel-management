import axios from 'axios';

const API_URL = 'https://api.example.com/resumes';

export const fetchResumes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch resumes data');
  }
};

export const fetchResumeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch resume data');
  }
};

export const addResume = async (resume) => {
  try {
    const response = await axios.post(API_URL, resume);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add resume');
  }
};

export const editResume = async (id, resume) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, resume);
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit resume');
  }
};

export const deleteResume = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete resume');
  }
};