const router = require('express').Router();
const { Image } = require('../../models');
const withAuth = require('../../utils/auth');

// route for adding a new image gallery
router.post('/', withAuth, async (req, res) => {
  try {
    const newImage = await Image.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newImage);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for updating an image by id
router.put('/:id', async (req, res) => {
  try {
    const imageData = await Image.update(
      {
        // all of the info that a user could update
        filename: req.body.filename
      },
      {
        // Gets the trips based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
    // have to start index at 0 even though our ids start at 1 because that's how Javascript indexes
    if (!imageData[0]) {
      res.status(404).json({ message: 'No image with this id!' });
      return;
    }
    res.status(200).json(imageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for deleting an image by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const imageData = await imageData.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!imageData) {
      res.status(404).json({ message: 'No image found with this id!' });
      return;
    }

    res.status(200).json(imageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;