const { Sequelize } = require('sequelize')

const db = new Sequelize(
  'tallerharweb',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  }
)

exports.db = db
