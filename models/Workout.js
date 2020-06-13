const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
  day: { type: Date },
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise'}],
  totalDuration: { type: Number }
})

WorkoutSchema.methods.setTotalDuration = function () {
  let totalDuration = 0
  this.exercises.forEach(exercise => {
    sum += exercise.duration
  })
  this.totalDuration = totalDuration
}

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout
