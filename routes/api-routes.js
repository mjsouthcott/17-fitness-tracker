const db = require('../models')
const router = require('express').Router()

// Route to get last workout
router.get('/api/workouts', (req, res) => {
  db.Workout
    .find({})
    .sort({
      date: -1,
    })
    .populate("exercises")
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

// Route to add exercise
router.put('/api/workouts/:id', (req, res) => {
  const exercise = new db.Exercise(req.body)
  exercise.save()

  db.Workout
    .findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: exercise._id,
        }
      }
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

// Route to create workout
router.post('/api/workouts', (req, res) => {
  const workout = new db.Workout({
    day: Date.now(),
    exercises: [],
  });
  workout
    .save()
    .then((dbWorkout) => res.status(201).json(dbWorkout))
    .catch((err) => {
      res.status(400).json(err)
    })
})

// Route to get workouts in range
router.get('/api/workouts/range', (req, res) => {
  db.Workout
    .find({})
    .sort({
      date: -1,
    })
    .populate("exercises")
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
})

module.exports = router