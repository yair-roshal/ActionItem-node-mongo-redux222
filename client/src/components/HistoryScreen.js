import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Typography, Box, TextField } from '@mui/material'
import { ProfileTable } from './styledComponents/ProfileTable'
import { fetchSavedList } from '../actions/peopleActions'

const HistoryScreen = () => {
  const navigate = useNavigate()
  const profiles = useSelector(state => state.profiles)
  const [filterName, setFilterName] = useState('')
  const [filterCountry, setFilterCountry] = useState('')

  const handleProfileClick = id => {
   }
  const savedProfiles = useSelector(state => state.savedProfiles)
console.log('savedProfiles', savedProfiles)
  return (
    <div>
      <h1>History Screen</h1>

      {savedProfiles.length > 0 ? (
        <ProfileTable
          profiles={savedProfiles}
          handleProfileClick={handleProfileClick}
        />
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  )
}

export default HistoryScreen
