import axios from 'axios';

export const fetchPeople = () => async (dispatch) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    const people = response.data.results;
    dispatch({ type: 'FETCH_PEOPLE_SUCCESS', payload: people });
  } catch (error) {
    dispatch({ type: 'FETCH_PEOPLE_ERROR', payload: error.message });
  }
};

export const saveProfile = (profile) => async (dispatch) => {
  try {
    await axios.post('/api/profiles', profile);
    dispatch({ type: 'SAVE_PROFILE_SUCCESS', payload: profile });
  } catch (error) {
    dispatch({ type: 'SAVE_PROFILE_ERROR', payload: error.message });
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/profiles/${id}`);
    dispatch({ type: 'DELETE_PROFILE_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_PROFILE_ERROR', payload: error.message });
  }
};

export const updateProfileName = (id, name) => async (dispatch) => {
  try {
    await axios.put(`/api/profiles/${id}`, { name });
    dispatch({ type: 'UPDATE_PROFILE_NAME_SUCCESS', payload: { id, name } });
  } catch (error) {
    dispatch({ type: 'UPDATE_PROFILE_NAME_ERROR', payload: error.message });
  }
};
