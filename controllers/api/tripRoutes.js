const router = require('express').Router();
const { Trip } = require('../../models');
const withAuth = require('../../utils/auth');

// route for adding a new trip
router.post('/', withAuth, async (req, res) => {
  try {
    const newTrip = await Trip.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for updating a trip by id
router.put('/:id', async (req, res) => {
  try {
    const tripData = await Trip.update(
      {
        // all of the info that a user could update
        destination: req.body.destination,
        trip_start: req.body.trip_start,
        trip_end: req.body.trip_end,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
      },
      {
        // Gets the trips based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
    // have to start index at 0 even though our ids start at 1 because that's how Javascript indexes
    if (!tripData[0]) {
      res.status(404).json({ message: 'No trip with this id!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for deleting a trip by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: 'No trip found with this id!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;