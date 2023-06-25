import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material'

const AllProfilesScreen = () => {
  const navigate = useNavigate()
  const profiles = useSelector(state => state.profiles)
  const [filterName, setFilterName] = useState('')
  const [filterCountry, setFilterCountry] = useState('')

  const handleProfileClick = id => {
    navigate(`/profile/${id}`)
  }

  const filteredProfiles = profiles.filter(profile => {
    const fullName = `${profile.name.title} ${profile.name.first} ${profile.name.last}`
    return (
      fullName.toLowerCase().includes(filterName.toLowerCase()) &&
      profile.location.country
        .toLowerCase()
        .includes(filterCountry.toLowerCase())
    )
  })

  console.log('filteredProfiles', filteredProfiles)
  return (
    <div>
      <h1>All Profiles Screen</h1>

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

      {filteredProfiles.length > 0 ? (
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
              {filteredProfiles.map((profile, index) => (
                 <TableRow
                  key={profile.cell}
                  onClick={() => handleProfileClick(profile.login.uuid)}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell>
                    <img
                      src={profile.picture.thumbnail}
                      alt='Profile Thumbnail'
                      style={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell>
                    {profile.name.title} {profile.name.first}{' '}
                    {profile.name.last}
                  </TableCell>
                  <TableCell>{profile.gender}</TableCell>
                  <TableCell>{profile.location.country}</TableCell>
                  <TableCell>{profile.phone}</TableCell>
                  <TableCell>{profile.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  )
}

export default AllProfilesScreen
