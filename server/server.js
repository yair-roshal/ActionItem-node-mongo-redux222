require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Profile = require('./models/Profile')

const app = express()
const PORT = process.env.PORT || 5000

 app.use(cors())
app.use(express.json())

 mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB', error)
  })

 app.get('/api/profiles', async (req, res) => {
  console.log('get.profiles')

  try {
    const profiles = await Profile.find()
    res.json(profiles)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/api/profiles', async (req, res) => {
 
  newProfile = {
    id: req.body.login.uuid,
    name: req.body.name.title + req.body.name.first + req.body.name.last,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.location.country,
    phone: req.body.phone,
    picture: req.body.picture.thumbnail,
  }

  try {
    const profile = await Profile.create(newProfile)
    res.status(201).json(profile)
  } catch (error) {
    console.log('error.message', error.message)
    res.status(400).json({ message: error.message })
  }
})

app.delete('/api/profiles/:id', async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({ id: req.params.id })

    console.log('profile111', profile)
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' })
    }
    res.json(profile)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.put('/api/profiles/:id', async (req, res) => {
  
   
  try {
    const profile = await Profile.findOneAndUpdate(
      { id: req.params.id },
      { name: req.body.name },
      { new: true }
    )
 
   
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' })
    }
    res.json(profile)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

 app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
