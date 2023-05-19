const router = require('express').Router();
const { Trip, Image, Blog, User } = require('../models');
const withAuth = require('../utils/auth');

// GET route for all trips
// server is what renders handlebars
// using WithAuth so unauthorized users cannot access data
// router.get('/', withAuth, async (req, res) => {
//   try {
//     // Get all trip data and JOIN with user data
//     const tripData = await Trip.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['id'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const trips = tripData.map((trip) => trip.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('dashboard', {
//       trips,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET route for trips by id
// router.get('/trip/:id', withAuth, async (req, res) => {
//   try {
//     const tripData = await Trip.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['id'],
//         },
//       ],
//     });

//     const trip = tripData.get({ plain: true });

//     // rendering handlebars data
//     res.render('trip', {
//       ...trip,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// GET route for all images
router.get('/image', withAuth, async (req, res) => {
  try {
    // Get all image data and JOIN with user data
    const imageData = await Image.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
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
          attributes: ['id'],
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

// GET route for all blogs
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all post data and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
        {
          model: Image,
          attributes: ['filename'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for posts by id
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id'],
        },
        {
          model: Image,
          attributes: ['filename'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    // rendering handlebars data
    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/trip');
    return;
  }

  res.render('login');
});

module.exports = router;

