const path = require('path')
const router = require('express').Router()

// Route to get index page
router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Route to get exercise page
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

// Route to get stats page
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router