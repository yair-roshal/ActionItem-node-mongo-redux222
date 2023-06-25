import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

const HistoryScreen = () => {
  const navigate = useNavigate()
  const savedProfiles = useSelector(state => state.savedProfiles)

  const handleProfileClick = id => {
    navigate(`/profile/${id}`)
  }

  return (
    <div>
      <Typography variant='h1' component='h1'>
        History Screen
      </Typography>
      {savedProfiles.map(profile => (
        <Box
          key={profile.id}
          onClick={() => handleProfileClick(profile.id)}
          sx={{ cursor: 'pointer' }}
        >
          <Typography variant='h3'>{profile.name}</Typography>
          <Typography variant='body1'>{profile.email}</Typography>
        </Box>
      ))}
    </div>
  )
}

export default HistoryScreen
