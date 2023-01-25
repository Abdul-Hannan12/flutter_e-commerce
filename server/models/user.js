const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const regex = /^[a-zA-Z][a-zA-Z ]{0,23}[a-zA-Z]$/;
        return value.match(regex);
      },
      message:
        "Name is not valid. It should start and end with an uppercase or lowercase letter and contain only letters and spaces and be between 3 and 16 characters long.",
    },
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return value.match(regex);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    required: true,
    type: String,
    validate: {
      validator: (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return value.match(regex);
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and have minimum 8 characters.",
    },
  },
  address: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
