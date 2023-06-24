import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { useNavigate } from 'react-router-dom'

const FetchScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFetchClick = async () => {
    await dispatch(fetchPeople())
    navigate('/profiles')
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
