const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/WorkoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router