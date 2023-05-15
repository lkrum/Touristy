const sequelize = require('../config/connection');
// require models here

// seeding database starts 
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

// bulk create whatever here
 


  process.exit(0);
};

seedDatabase();
