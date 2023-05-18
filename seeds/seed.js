const sequelize = require('../config/connection');
const { User, Post, Image } = require('../models');
// requiring json and js files
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const ImageData = require('./imageData.json');
const tripData = require('./tripData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
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
