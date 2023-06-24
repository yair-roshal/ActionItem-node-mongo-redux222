import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import FetchScreen from './components/FetchScreen'
import HistoryScreen from './components/HistoryScreen'
import ProfileScreen from './components/ProfileScreen'
import AllProfilesScreen from './components/AllProfilesScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
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
