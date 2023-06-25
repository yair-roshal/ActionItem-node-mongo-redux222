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
    navigate(`/profile/${id}`)
  }
  const savedProfiles = useSelector(state => state.savedProfiles)

  const filteredProfiles = profiles.filter(profile => {
    const fullName = `${profile.name.title} ${profile.name.first} ${profile.name.last}`
    return (
      fullName.toLowerCase().includes(filterName.toLowerCase()) &&
      profile.location.country
        .toLowerCase()
        .includes(filterCountry.toLowerCase())
    )
  })

  return (
    <div>
      <h1>History Screen</h1>

      <div>
        <TextField
          label='Filter by name'
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
          variant='outlined'
          size='small'
          style={{ marginRight: 10 }}
        />
        <TextField
          label='Filter by country'
          value={filterCountry}
          onChange={e => setFilterCountry(e.target.value)}
          variant='outlined'
          size='small'
        />
      </div>

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
