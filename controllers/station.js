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
    const lastWindDirection = stationAnalytics.getWindDirection(
      station
    );
    const lastWind = stationAnalytics.Beau(Number(lastestReading));
    //const calcTrend = stationAnalytics.calcTrend(station);
    const tempTrend = stationAnalytics.timeTrend(station);
    const pressureTrend = stationAnalytics.pressureTrend(station);
    //const Trend= stationAnalytics.calcTrend(station);
    const tempTrendIcons = stationAnalytics.trendCodeIcons(station);

    const viewData = {
      name: "Station",
      station: station,
      stationSummary: {
        maxReading: stationAnalytics.getMaxReading(station),
        minReading: stationAnalytics.getMinReading(station),
        lastReading: lastestReading,
        weatherCode: stationAnalytics.getcodeToText(Number(lastestCode)),
        beaufort: lastWind,
        windDirectionCompass: stationAnalytics.degreesToCompass(
          Number(lastWindDirection)
        ),
        tempF: stationAnalytics.getTempF(Number(lastestTemp)),
        weatherCodeIcons: stationAnalytics.weatherCodeIcons(
          Number(lastestCode)
        ),
        windChill: stationAnalytics.getwindChill(
          lastTemp,
          lastWindSpeed
        ),
        tempTrendIcons: stationAnalytics.trendCodeIcons(tempTrend),
        tempTrend: tempTrend,
        pressureTrend:  pressureTrend
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
    const today = new Date();
    const newReading = {
      id: uuid.v1(),
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        (today.getHours() + 1) +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windspeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;
