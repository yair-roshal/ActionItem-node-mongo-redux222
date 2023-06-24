import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { useNavigate } from 'react-router-dom'

const FetchScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFetchClick = () => {
    dispatch(fetchPeople())
    navigate('/profile')
  }

  const handleHistoryClick = () => {
    navigate('/history')
  }

  return (
    <div>
      <h1>Fetch Screen</h1>
      <button onClick={handleFetchClick}>Fetch</button>
      <button onClick={handleHistoryClick}>History</button>
    </div>
  )
}

export default FetchScreen
