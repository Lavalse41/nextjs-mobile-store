const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../connection");

const basename = path.basename(__filename);

const db = {};
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model; // add model in db {}
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    // associate method is called
    db[modelName].associate(db); // whole db {} passed to method
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
