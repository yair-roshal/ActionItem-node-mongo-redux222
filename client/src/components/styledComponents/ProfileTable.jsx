import React from 'react'
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
} from '@mui/material'

export const ProfileTable = ({ profiles, handleProfileClick }) => {
  return (
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
          {profiles.map((profile, index) => (
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
              <TableCell>{profile.name}</TableCell>
              <TableCell>{profile.gender}</TableCell>
              <TableCell>{profile.location.country}</TableCell>
              <TableCell>{profile.phone}</TableCell>
              <TableCell>{profile.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
