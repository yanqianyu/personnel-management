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
