"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const station = require('./controllers/station.js');
const accounts = require('./controllers/accounts.js');
const reading = require("./controllers/reading.js");

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.post("/dashboard/addreport", dashboard.addreport);


router.get("/dashboard", dashboard.index);
router.get("/dashboard/deletestation/:id", dashboard.deleteStation);
router.post("/dashboard/addstation", dashboard.addStation);

router.get("/about", about.index);
router.get('/station/:id', station.index);
router.get('/station/:id/deletereading/:readingid', station.deleteReading);
router.post('/station/:id/addreading', station.addReading);

router.get("/reading/:id/editreading/:readingid", reading.index);
router.post("/reading/:id/updatereading/:readingid", reading.update);

module.exports = router;
