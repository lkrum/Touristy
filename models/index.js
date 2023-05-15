const User = require("./user");
const Trip = require("./trip");

User.hasMany(Trip, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE' 
});

Trip.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, Trip };