require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const handle = require("./handlers");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(bodyParser.json());

// handlers
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`server running on ${port}`));
