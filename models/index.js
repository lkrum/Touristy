const User = require('./user');
const Trip = require('./trip');
const Image = require('./image');
const Post = require('./post');

// user relationships
User.hasMany(Trip, Image, Post, {
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

Trip.hasMany(Post, {
  foreignKey: 'post_id'
});

// image relationships
Image.belongsTo(User, {
  foreignKey: 'user_id'
});

Image.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Image.belongsTo(Post, {
  foreignKey: 'post_id'
})

Image.hasMany(Post, {
  foreignKey: 'post_id'
})

// post relationships
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsTo(Trip, {
  foreignKey: 'trip_id'
})

Post.hasOne(Image, {
  foreignKey: 'image_id'
})

module.exports = { User, Trip, Image, Post };