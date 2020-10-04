const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const app = express();

passport.use(new GoogleStrategy());
const PORT = process.env.PORT || 5000;
const name = "master";
const sal = "sal";
const adni = "andi";
const something = "something";
const again = "again";
app.listen(PORT);
