const mongoose = require("mongoose");
const validator = require("validator")
mongoose.connect("mongodb://localhost:27017/mongoose-test");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate:{
        validator: function(value){
            if(!validator.isEmail(value)) throw new Error("Error")
        },
    },
  },
  password: {
    type: Number,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "racoon",
  email: "ideal@naver.com",
  password: 1234,
  age: 20,
});

newUser.save()
    .then(value => {
        console.log(value);
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
        mongoose.connection.close();
    })

