const router = require("express").Router();
const db = require("../../models");

// get all
router.get("/", async (req, res) => {
    try {
        const lastOne = await db.Workout.find({}).sort({_id: 1});
        res.status(200).json(lastOne);
    } catch (err) {
        res.status(501).json(err);
    }
});

// add
router.post("/", async (req, res) => {
    try {
        const newWorkout = await db.Workout.create(req.body);
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update
router.put("/:id", async (req, res) => {
    try {
        const newRoutine = await db.Workout.findByIdAndUpdate(req.params.id,
            { $push: { exercises: req.body }},
            { new: true}
            );
        res.status(200).json(newRoutine);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get last 7 workouts
router.get("/range", async (req, res)=> {
try {
    const range = await db.Workout.find().sort({_id: -1}).limit(7);
    res.status(200).json(reverse);
} catch (err) {
    res.status(500).json(error);
}

});

module.exports = router;