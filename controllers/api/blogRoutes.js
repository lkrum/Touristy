const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


// route for adding a new blog
// using fetch to make blog request, 
router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route for updating a blog by id
router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blog.update(
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
    if (!blogData[0]) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for deleting a blog by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
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