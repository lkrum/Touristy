const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// route for adding a new post
// using fetch to make post request, 
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for updating a post by id
router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(
      {
        // all of the info that a user could update
        description: req.body.description,
      },
      {
        // Gets the trips based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
    // have to start index at 0 even though our ids start at 1 because that's how Javascript indexes
    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for deleting a trip by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// mapbox api key
// const accessToken = 'pk.eyJ1Ijoia2VsY2xhcmsiLCJhIjoiY2xoc2luYmI2Mnk1azNnczZrdmgwbmhheCJ9.pftHqj4EZsWsO0HOlvrSOg';

// // Initialize map
// mapboxgl.accessToken = accessToken;
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [-34.397, 150.644],
//   zoom: 8, 
// });

module.exports = router;