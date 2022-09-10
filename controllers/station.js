"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/stationAnalytics");
const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = " + stationId);
    const station = stationStore.getStation(stationId);
    const readings = stationAnalytics.getReadings(station);
    const lastTemp = stationAnalytics.getTemp(station);
    const lastCode = stationAnalytics.getCode(station);
    const lastWindSpeed = stationAnalytics.getWindspeed(station);
    const WindDir = stationAnalytics.getWindDirection(station);
    const lastWind = stationAnalytics.getBeaufort(Number(readings));
    const lastPressure = stationAnalytics.getPressure(station);
    const tempTrend = stationAnalytics.tempTrend(station);
    const windTrend = stationAnalytics.windTrend(station);
    const pressureTrend = stationAnalytics.pressureTrend(station);

    const viewData = {
      name: "station",
      station: station,
      stationSummary: {
        maxTemp: stationAnalytics.getMaxTemp(station),
        minTemp: stationAnalytics.getMinTemp(station),
        maxWind: stationAnalytics.getMaxWind(station),
        minWind: stationAnalytics.getMinWind(station),
        maxPressure: stationAnalytics.getMaxPressure(station),
        minPressure: stationAnalytics.getMinPressure(station),
        weatherCode: stationAnalytics.getCodeToWeather(Number(lastCode)),
        beaufort: stationAnalytics.getBeaufort(Number(lastWindSpeed)),
        WindComp: stationAnalytics.getWindComp(Number(WindDir)),
        tempC : stationAnalytics.getTemp(station),
        tempF: stationAnalytics.getTempF(Number(lastTemp)),
        pressure: stationAnalytics.getTempPressure(station),
        weatherCodeIcons: stationAnalytics.getWeatherCodeIcons(
          Number(lastCode)
        ),
        windChill: stationAnalytics.getWindChill(lastTemp, lastWindSpeed),
        tempTrend: tempTrend,
        windTrend: windTrend,
        pressureTrend: pressureTrend
      },
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
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        (today.getHours() + 1) +
        ":" +
        today.getMinutes(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDir: request.body.windDir,
      pressure: request.body.pressure,
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  },
};

module.exports = station;
