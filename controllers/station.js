"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");
const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = " + stationId);
    const station = stationStore.getStation(stationId);
    const lastReading = stationAnalytics.getReadings(station);
    const lastTemp = stationAnalytics.getTemp(station);
    const lastCode = stationAnalytics.getCode(station);
    const lastWindSpeed = stationAnalytics.getWindspeed(station);
    const WindDir = stationAnalytics.getWindDirection(station);
    const lastWind = stationAnalytics.Beau(Number(lastReading));
    const lastPressure = stationAnalytics.getPressure(station);

    const viewData = {
      name: "Station",
      station: station,
      stationSummary: {
        maxReading: stationAnalytics.getMaxReading(station),
        minReading: stationAnalytics.getMinReading(station),
        lastReading: lastReading,
        weatherCode: stationAnalytics.getCodeToWeather(Number(lastCode)),
        beaufort: lastWind,
        WindComp: stationAnalytics.getWindComp(
          Number(WindDir)
        ),
        tempF: stationAnalytics.getTempF(Number(lastTemp)),
        weatherCodeIcons: stationAnalytics.getWeatherCodeIcons(
          Number(lastCode)
        ),
        windChill: stationAnalytics.getWindChill(
          lastTemp,
          lastWindSpeed
        )
    }
  };
    response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },

  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;
