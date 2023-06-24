import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPeople } from '../actions/peopleActions';

const FetchScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFetchClick = () => {
    dispatch(fetchPeople());
    history.push('/profile');
  };

  const handleHistoryClick = () => {
    history.push('/history');
  };

  return (
    <div>
      <h1>Fetch Screen</h1>
      <button onClick={handleFetchClick}>Fetch</button>
      <button onClick={handleHistoryClick}>History</button>
    </div>
  );
};

export default FetchScreen;
