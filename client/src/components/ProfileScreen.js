import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {
  saveProfile,
  deleteProfile,
  updateProfileName,
} from '../actions/peopleActions'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
} from '@mui/material'

const ProfileScreen = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profiles = useSelector(state => state.profiles)
  const savedProfiles = useSelector(state => state.savedProfiles)

  const [name, setName] = useState('')

  const profile = profiles.find(p => p.login.uuid === id)
  const isSaved = savedProfiles.some(p => p.login.uuid === id)

  const handleSaveClick = () => {
    dispatch(saveProfile(profile))
  }

  const handleDeleteClick = () => {
    dispatch(deleteProfile(id))
  }

  const handleUpdateClick = () => {
    console.log('id,  ', id)
    console.log(' , name', name)
    dispatch(updateProfileName(id, name))
    if (!isSaved) {
      const updatedProfile = { ...profile, name }
      dispatch(saveProfile(updatedProfile))
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Profile Screen</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={profile.cell}>
              <TableCell>
                <img
                  src={profile.picture.thumbnail}
                  alt='Profile Thumbnail'
                  style={{ width: 50, height: 50 }}
                />
              </TableCell>
              <TableCell>
                {profile.name.title} {profile.name.first} {profile.name.last}
                {/* {profile.name.title} {profile.name.first} {profile.name.last} */}
              </TableCell>
              <TableCell>{profile.gender}</TableCell>
              <TableCell>{profile.location.country}</TableCell>
              <TableCell>{profile.phone}</TableCell>
              <TableCell>{profile.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ m: 1 }}>
        <TextField type='text' value={name} onChange={handleNameChange} />

        <Button sx={{ m: 1 }} onClick={handleUpdateClick}>
          Update
        </Button>
      </Box>

      <Button sx={{ m: 1 }} onClick={handleSaveClick} disabled={isSaved}>
        Save
      </Button>

      <Button sx={{ m: 1 }} onClick={handleDeleteClick} disabled={!isSaved}>
        Delete
      </Button>

      <Button sx={{ m: 1 }} onClick={handleBackClick}>
        Back
      </Button>
    </div>
  )
}

export default ProfileScreen
