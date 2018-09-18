module.exports = function (sequelize, DataTypes) {
  var blogs = sequelize.define("blogs", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
  });
  return blogs;
};
