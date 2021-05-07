const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    routine: [

        {
            type: {
                type: String,
                trim: true,
                required: 'Select an excercise type',
            },
            name: {
                type: String,
                trim: true,
                required: 'Name is required',
            },
            duration: {
                type: Number,
                trim: true,
                required: 'Duration is required',
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
            },
        }
    ]
});


const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;