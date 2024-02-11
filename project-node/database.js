const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodeapp', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})





async function connectDatabase(sql) {
    try {
        await sql.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
connectDatabase(sequelize)