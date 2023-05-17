const { Image } = require('../models');

const imageData = [
  {
    filename: 'waterfall.jpg',
    description: 'man standing on a rock in front of a waterfall'
  },
  {
    filename: 'burger.jpg',
    description: 'burger and fries on a plate',
  },
  {
    filename: 'camera.jpg',
    description: 'girl behind a camera',
  },
  {
    filename: 'dog.jpg',
    description: 'white and brown-spotted dog on a beach',
  },
  {
    filename: 'friends.jpg',
    description: 'group of men sitting on cliffside',
  },
  {
    filename: 'kayak.jpg',
    description: 'girl sitting in a kayak on a river',
  },
  {
    filename: 'river.jpg',
    description: 'girl sitting on a rock next to a river',
  },
  {
    filename: 'italy.jpg',
    description: 'bicycle on Italian street',
  },
  {
    filename: 'paris.jpg',
    description: 'burger and fries on a plate',
  },
  {
    filename: 'japan.jpg',
    description: 'road lined with houses in Shirakawa-Go, Japan',
  },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;
