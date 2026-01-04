console.log("Server is starting");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB chaqirish
const db = require("./server").db();
const { ObjectId } = require("mongodb");

// 1 Entry code
app.use(express.static("public"));
app.use(express.json()); // JSON data => JavaScript object
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  console.log("STEP2: BACKENDga kirish..");
  console.log("req.body:", req.body);

  console.log("STEP3: BACKEND => DATABASE (CREATE)");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log("STEP4: DATABASE => BACKEND (returned with the created DATA)");
    console.log(data.ops);

    console.log("STEP5: BACKEND - JSON => FRONTEND ");
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("STEP2: BACKENDga kirish..");

  console.log("STEP3: BACKEND => DATABASE (READ)");
  db.collection("plans") // "plans" - CLUSTER => DATABASE => COLLECTION
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        console.log("STEP4: DATABASE => BACKEND (returned with DATA)");
        console.log(data);

        console.log("STEP5: BACKEND - EJS>DATA>HTML => FRONTEND");
        res.render("reja", { items: data }); // "reja" - ejs-related
      }
    });
});

module.exports = app;
