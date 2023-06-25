import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

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
      <Button sx={{ m: 1 }} variant='contained' onClick={handleFetchClick}>
        Fetch
      </Button>
      <Button sx={{ m: 1 }} variant='contained' onClick={handleHistoryClick}>
        History
      </Button>
    </div>
  )
}

export default FetchScreen
