const express = require("express");
const app = express();
const mongoose = require("mongoose");
const person = require("./models/person");

app.listen(8000, () => {
  console.log("server runnning on Port : 8000");
});

mongoose.connect("mongodb://localhost:27017/person");

const db = mongoose.connection;
db.once("open", () => {
  console.log("conected");
});
db.on("error", (err) => {
  console.log("error conection ", err);
});

//create and save report

let myperson = new person({
  name: "amine",
  age: 23,
  faveratefood: "pizza",
});

myperson.save();

// person.find().then((obj) => console.log(obj));

// let arrayOfPeople = [
//   {
//     name: "Mary",
//     age: 28,
//     faveratefood: ["dark chocolate", "green food", "smothies"],
//   },
//   {
//     name: "Houda",
//     age: 15,
//     faveratefood: ["Chips", "Cack", "Soupe"],
//   },
//   { name: "Salima", age: 24, faveratefood: ["Tous"] },
// ];

// async function createPeople() {
//   try {
//     const createdPeople = await person.create(arrayOfPeople);
//     // console.log('Created people:', createdPeople);
//     // Handle the created people, maybe send a success response
//   } catch (err) {
//     console.error(err); // Log the error
//     // Handle the error, maybe send an error response
//   }
// }
// createPeople();

// person.find().then((docs) => {
//   "All", console.log(docs);
// });

person
  .findOne({ faveratefood: "pizza" })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.error(err));

person
  .findByIdAndUpdate("65ec560e4b35f46552a47026", {
    name: "Amineee",
  })
  .then((updateddoc) => {
    console.log("updated doc", updateddoc);
  });

// person
//   .findByIdAndDelete("65ec6de81552afd544a1bcd5")
//   .then((deletedDoc) => {
//     console.log("Deleted doc:", deletedDoc);
//   })
//   .catch((err) => console.error(err));

person
  .deleteOne({ name: "Amine" })
  .then((result) => {
    if (result.deletedCount > 0) {
    } else {
      console.log("No document ");
    }
  })
  .catch((err) => console.error(err));
