const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const ejsMate = require("ejs-mate");

dotenv.config();
const app = express();

const bridgePayRouter = require("./routes/bridgepay");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));

app.use("/bridge-pay", bridgePayRouter);

app.get("/contact-us", (req, res) => {
    res.render("contactus");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
