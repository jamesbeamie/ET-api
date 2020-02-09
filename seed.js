require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const db = require("./models");

const users = [
  { username: "James", password: "password" },
  { username: "Theuser", password: "Userpwd" }
];

const todo = [
  {
    taskname: "Laundry"
  },
  {
    taskname: "Skate"
  }
];

const seed = async () => {
  try {
    // await db.User.remove();
    // console.log("DROP ALL USERS");

    // await db.Todo.remove();
    // console.log("DROP ALL todo");

    await Promise.all(
      users.map(async user => {
        // const data = await db.User.create(user);
        const data = await db.User.create(users);
        await data.save();
      })
    );
    console.log("CREATED USERS", JSON.stringify(users));

    await Promise.all(
      todo.map(async todo => {
        const data = await db.Todo.create(todo);
        const user = await db.User.findOne({ username: "username" });
        data.user = user;
        user.todo.push(data._id);
        await user.save();
        await data.save();
      })
    );
    console.log("CREATED todo", JSON.stringify(todo));
  } catch (err) {
    console.error(err);
  }
};

seed();
