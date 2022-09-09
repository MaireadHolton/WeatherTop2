"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/stationAnalytics");
const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationName = request.params.name;
    logger.debug("Station id = " + stationName);
    const station = stationStore.getStation(stationName);
    const readings = stationAnalytics.getReadings (station);
    const lastTemp = stationAnalytics.getTemp(station);
    const lastCode = stationAnalytics.getCode(station);
    const lastWindSpeed = stationAnalytics.getWindspeed(station);
    const WindDir = stationAnalytics.getWindDirection(station);
    const lastWind = stationAnalytics.Beau(Number(readings));
    const lastPressure = stationAnalytics.getPressure(station);

    const viewData = {
      name: "station",
      station: station,
      stationSummary: {
        maxReading: stationAnalytics.getMaxReading(station),
        minReading: stationAnalytics.getMinReading(station),
        weatherCode: stationAnalytics.getCodeToWeather(Number(lastCode)),
        beaufort: stationAnalytics.getBeaufort(Number(lastWindSpeed)),
        WindComp: stationAnalytics.getWindComp(Number(WindDir)),
        tempF: stationAnalytics.getTempF(Number(lastTemp)),
        weatherCodeIcons: stationAnalytics.getWeatherCodeIcons(Number(lastCode)),
        windChill: stationAnalytics.getWindChill(lastTemp,lastWindSpeed)
    }
  };
    response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationName = request.params.name;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationName}`);
    stationStore.removeReading(stationName, readingId);
    response.redirect("/station/" + stationName);
  },

  addReading(request, response) {
    const stationName = request.params.name;
    const station = stationStore.getStation(stationName);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDir: request.body.windDir,
      pressure: request.body.pressure
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationName, newReading);
    response.redirect("/station/" + stationName);
  }
};

module.exports = station;
