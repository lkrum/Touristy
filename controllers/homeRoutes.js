const router = require('express').Router();
const { Trip, Image, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET route for all trips
// using WithAuth so unauthorized users cannot access data
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all trip data and JOIN with user data
    const tripData = await Trip.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const trips = tripData.map((trip) => trip.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      trips,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for trips by id
router.get('/trip/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const trip = tripData.get({ plain: true });

    // rendering handlebars data
    res.render('trip', {
      ...trip,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for all images
router.get('/image', async (req, res) => {
  try {
    // Get all image data and JOIN with user data
    const imageData = await Image.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        // {
        //   model: Image,
        //   attributes: ['filename'],
        // },
      ],
    });

    // Serialize data so the template can read it
    const images = imageData.map((image) => image.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('gallery', {
      images,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for images by id
router.get('/image/:id', withAuth, async (req, res) => {
  try {
    const imageData = await Image.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const image = imageData.get({ plain: true });

    // rendering handlebars data
    res.render('gallery', {
      ...image,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for all posts
router.get('/post', async (req, res) => {
  try {
    // Get all post data and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('post', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for posts by id
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    // rendering handlebars data
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// profile page 

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     // rendering the user profile with the user model data
//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/trip');
    return;
  }

  res.render('login');
});

module.exports = router;

