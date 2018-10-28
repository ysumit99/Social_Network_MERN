const express = require("express");

const app = express();

//Simple route for testing

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000; //first part for production i.e when deployed  on heroku

app.listen(port, () => console.log(`Server running on ${port}`));
