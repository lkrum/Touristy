const User = require('./user');
const Trip = require('./trip');
const Image = require('./image');
const Blog = require('./blog');

// user relationships
User.hasMany(Trip, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Image, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// trip relationships
Trip.belongsTo(User, {
  foreignKey: 'user_id'
});

Trip.hasMany(Image, {
  foreignKey: 'image_id'
});

Trip.hasMany(Blog, {
  foreignKey: 'blog_id'
});

// image relationships
Image.belongsTo(User, {
  foreignKey: 'user_id'
});

Image.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Image.belongsTo(Blog, {
  foreignKey: 'blog_id'
})

Image.hasOne(Blog, {
  foreignKey: 'blog_id'
})

// blog relationships
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.belongsTo(Trip, {
  foreignKey: 'trip_id'
})

Blog.hasOne(Image, {
  foreignKey: 'image_id'
})

module.exports = { User, Trip, Image, Blog };