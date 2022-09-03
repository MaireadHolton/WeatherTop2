"use strict";

getReadings(station) {
    let readings = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1];
    }
    return readings;
  },
    
    const stationAnalytics = {
  getMaxReading(station) {
    let maxReading = null;
    if (station.readings.length > 0) {
      maxReading = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        maxReading = station.readings[i];
      }
    }
    return maxReading;
  },

  getMinReading(station) {
    let minReading = null;
    if (station.readings.length > 0) {
      minReading = station.readings[0];
      for (let i = 1; i > station.readings.length; i++) {
        minReading = station.readings[i];
      }
    }
    return minReading;
  },
      
  getCode(station) {
    let readings = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].code;
    }
    return readings;
  },
      
  getWeather(station){
    let lastWeather = null;
    if (station.readings.length > 0) {
        for (Reading reading : readings) {
            if (reading.code == 100) {
              lastWeather = "Clear";
              } else if (reading.code == 200) {
              lastWeather = "partial clouds";
              } else if (reading.code == 300) {
              lastWeather = "Cloudy";
              } else if (reading.code == 400) {
              lastWeather = "Light Showers";
              } else if (reading.code == 500) {
              lastWeather = "Heavy Showers";
              } else if (reading.code == 600) {
              lastWeather = "Rain";
              } else if (reading.code == 700) {
              lastWeather = "Snow";
              } else if (reading.code == 800) {
              lastWeather = "Thunder";
              }
            }
        }
        return lastWeather;
  },
    
    getIcon(station){
      let code = null;
      Map weatherIcons = null;
        if (readings.size() > 0) {
            code = readings.size();
            for (Reading reading : readings) {
                code = reading.code;
                {
                    const weatherIcons = new Map();
                    weatherIcons.set(0, "big red exclamation circle icon");
                    weatherIcons.set(100, "big orange sun icon");
                    weatherIcons.set(200, "big yellow cloud sun icon");
                    weatherIcons.set(300, "big white cloud icon");
                    weatherIcons.set(400, "big blue cloud sun rain icon");
                    weatherIcons.set(500, "big grey cloud showers heavy icon");
                    weatherIcons.set(600, "big grey cloud rain icon");
                    weatherIcons.set(700, "big blue snowflake icon");
                    weatherIcons.set(800, "big yellow bolt icon");
                }
            }
            return weatherIcons.get(code);
        }
        else {
            code = 0;
        }
        return null;
    },
      


      