const bcrypt = require("bcrypt");

/*module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",*/
const User = [
  {
    username: {
      type: String,
      allowNull: false,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      allowNull: false,
      unique: true,
      required: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: String,
      required: true,
      allowNull: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "manager", "user"],
    },
  },

  {
    timestamps: true,
  },
];
module.exports = User;

/*{
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
        beforeUpdate: async (user) => {
          if (user.password && user.changed("password")) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
      },
    }
  );

/*  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};*/

//module.exports = userSchema;
