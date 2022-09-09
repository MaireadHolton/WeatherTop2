"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");

const reading = {
  index(request, response) {
    const stationName = request.params.name;
    const readingId = request.params.readingid;
    logger.debug(`Editing Reading ${readingId} from Station ${stationName}`);
    const viewData = {
      title: "Edit Reading",
      station: stationStore.getStation(stationName),
      reading: stationStore.getReading(stationName, readingId)
    };
    response.render("reading", viewData);
  },

  update(request, response) {
    const stationName = request.params.name;
    const readingId = request.params.readingid;
    const reading = stationStore.getReading(stationName, readingId);
    const newReading = {
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDir: request.body.windDir,
      pressure: request.body.pressure
    };
    logger.debug(`Updating Reading ${readingId} from Station ${stationName}`);
    stationStore.updateReading(reading, newReading);
    response.redirect("/station/" + stationName);
  }
};

module.exports = reading;
