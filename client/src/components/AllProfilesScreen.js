import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HistoryScreen = () => {
  const navigate = useNavigate()
  const profiles = useSelector(state => state.profiles)

  const handleProfileClick = id => {
    navigate(`/profile/${id}`)
  }

  return (
    <div>
      <h1>All Profiles Screen</h1>

      {profiles &&
        profiles.map(profile => (
          <div
            key={profile.cell}
            onClick={() => handleProfileClick(profile.id)}
          >
            <h3>
              {profile.name.title} {profile.name.first} {profile.name.last}{' '}
            </h3>

            <p>{profile.email}</p>
          </div>
        ))}
    </div>
  )
}

export default HistoryScreen
