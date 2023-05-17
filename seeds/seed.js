const sequelize = require('../config/connection');
const { User, Post, Image } = require('../models');
// requiring json and js files
const userData = require('./userData.json');
const postData = require('./postData.json');
const ImageData = require('./imageData.json');
const tripData = require('./tripData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }

  for (const image of ImageData) {
    await Image.create({
      ...image,
    });
  }

  for (const trip of tripData) {
    await Trip.create({
      ...trip,
    });
  }

  process.exit(0);
};

seedDatabase();
