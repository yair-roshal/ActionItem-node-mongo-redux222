import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import FetchScreen from './components/FetchScreen'
import HistoryScreen from './components/HistoryScreen'
import ProfileScreen from './components/ProfileScreen'
import AllProfilesScreen from './components/AllProfilesScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Menu = () => (
  <AppBar position='static'>
    <Toolbar>

      <Button color='inherit' component={Link} to='/'>
        Home
      </Button>
      <Button color='inherit' component={Link} to='/history'>
        History
      </Button>
      <Button color='inherit' component={Link} to='/profiles'>
        Profiles
      </Button>
  
    </Toolbar>
  </AppBar>
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu />

        <Routes>
          <Route path='/' exact element={<FetchScreen />} />
          <Route path='/history' element={<HistoryScreen />} />
          <Route path='/profiles' element={<AllProfilesScreen />} />
          <Route path='/profile/:id' element={<ProfileScreen />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
