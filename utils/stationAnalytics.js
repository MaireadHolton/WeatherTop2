"use strict";

const stationAnalytics = {
  getReadings(station) {
    let readings = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1];
    }
    return readings;
  },

  getCode(station) {
    let lastCode = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].code;
    }
    return lastCode;
  },

  getCodeToWeather(code) {
    switch (code) {
      case 100:
        return "Clear";
      case 200:
        return "Partial Clouds";
      case 300:
        return "Cloudy";
      case 400:
        return "Light Showers";
      case 500:
        return "Heavy Showers";
      case 600:
        return "Rain";
      case 700:
        return "Snow";
      case 800:
        return "Thunder";
      default:
        return "error";
    }
  },

  getWeatherCodeIcons(code) {
    switch (code) {
      case 100:
        return "sun icon";
      case 200:
        return "cloud sun icon";
      case 300:
        return "cloud icon";
      case 400:
        return "cloud sun rain icon";
      case 500:
        return "cloud showers heavy icon";
      case 600:
        return "cloud rain icon";
      case 700:
        return "snowflake icon";
      case 800:
        return "bolt icon";
      default:
        return "error";
    }
  },

  getTemp(station) {
    let lastTemp = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].temp;
    }
    return lastTemp;
  },

  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading.temp > maxTemp) {
          maxTemp = station.reading.Temp;
        }
      }
    }
    return maxTemp;
  },

  getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading.temp < minTemp) {
          minTemp = station.reading.Temp;
        }
      }
    }
    return minTemp;
  },

  tempTrend(station) {
    let readings = 0;
    if (station.readings.length > 2) {
      if (
        station.readings[-1].temp > station.readings[-2].temp &&
        station.readings[-2].temp > station.readings[-1].temp
      ) {
        readings = 1;
      } else if (
        station.readings[-3].temp < station.readings[-2].temp &&
        station.readings[-2].temp < station.readings[-1].temp
      ) {
        readings = -1;
      }
    }
    return readings;
  },

  getTempF(getTemp) {
    return getTemp * 1.8 + 32;
  },

  getWindSpeed(station) {
    let lastWindSpeed = 0;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].windSpeed;
    }
    return lastWindSpeed;
  },

  getMaxWind(station) {
    let maxWind = null;
    if (station.readings.length > 0) {
      maxWind = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading.windSpeed > maxWind) {
          maxWind = station.reading.windSpeed;
        }
      }
    }
    return maxWind;
  },

  getMinWind(station) {
    let minWind = null;
    if (station.readings.length > 0) {
      minWind = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading.windSpeed < minWind) {
          minWind = station.reading.windSpeed;
        }
      }
    }
    return minWind;
  },

  windTrend(station) {
    let readings = 0;
    if (station.readings.length > 2) {
      if (
        station.readings[-1].windSpeed > station.readings[-2].windSpeed &&
        station.readings[-2].windSpeed > station.readings[-1].windSpeed
      ) {
        readings = 1;
      } else if (
        station.readings[-3].windSpeed < station.readings[-2].windSpeed &&
        station.readings[-2].windSpeed < station.readings[-1].windSpeed
      ) {
        readings = -1;
      }
    }
    return readings;
  },

  getBeaufort(windSpeed) {
    let Beau = null;
    if (windSpeed == 0) {
      return 0;
      Beau = "Calm";
    } else if (windSpeed >= 1 && windSpeed <= 5) {
      return 1;
      Beau = "Light Air";
    } else if (windSpeed >= 6 && windSpeed <= 11) {
      return 2;
      Beau = "Light breeze";
    } else if (windSpeed >= 12 && windSpeed <= 19) {
      return 3;
      Beau = "Gentle Breeze";
    } else if (windSpeed >= 20 && windSpeed <= 28) {
      return 4;
      Beau = "Moderate breeze";
    } else if (windSpeed >= 29 && windSpeed <= 38) {
      return 5;
      Beau = "Freah breeze";
    } else if (windSpeed >= 39 && windSpeed <= 49) {
      return 6;
      Beau = "Strong breeze";
    } else if (windSpeed >= 50 && windSpeed <= 61) {
      return 7;
      Beau = "Near gale";
    } else if (windSpeed >= 62 && windSpeed <= 74) {
      return 8;
      Beau = "Gale";
    } else if (windSpeed >= 75 && windSpeed <= 88) {
      return 9;
      Beau = "Severe gale";
    } else if (windSpeed >= 89 && windSpeed <= 102) {
      return 10;
      Beau = "Strong storm";
    } else if (windSpeed >= 103 && windSpeed <= 117) {
      return 11;
      Beau = "Violent storm";
    } else if (windSpeed >= 117) {
      return 12;
    }
    return -1;
    return Beau;
  },

  getWindDir(station) {
    let windDir = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].windDir;
    }
    return windDir;
  },

  getWindComp(windDir) {
    if (windDir > 11.25 && windDir <= 33.75) {
      return "North North East";
    } else if (windDir > 33.75 && windDir <= 56.25) {
      return "East North East";
    } else if (windDir > 56.25 && windDir <= 78.75) {
      return "East";
    } else if (windDir > 78.75 && windDir <= 101.25) {
      return "East South East";
    } else if (windDir > 101.25 && windDirection <= 123.75) {
      return "East South East";
    } else if (windDir > 123.75 && windDirection <= 146.25) {
      return "South East";
    } else if (windDirection > 146.25 && windDirection <= 168.75) {
      return "South South East";
    } else if (windDirection > 168.75 && windDirection <= 191.25) {
      return "South";
    } else if (windDirection > 191.25 && windDirection <= 213.75) {
      return "South South West";
    } else if (windDirection > 213.75 && windDirection <= 236.25) {
      return "South West";
    } else if (windDirection > 236.25 && windDirection <= 258.75) {
      return "West South West";
    } else if (windDirection > 258.75 && windDirection <= 281.25) {
      return "West";
    } else if (windDirection > 281.25 && windDirection <= 303.75) {
      return "West North West";
    } else if (windDirection > 303.75 && windDirection <= 326.25) {
      return "North West";
    } else if (windDirection > 326.25 && windDirection <= 348.75) {
      return "North North West";
    } else {
      return "North";
    }
  },

  getwindChill(temp, windSpeed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
  },

  getPressure(station) {
    let lastPressure = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].pressure;
    }
    return lastPressure;
  },

  getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading.pressure > maxPressure) {
          maxPressure = station.reading.pressure;
        }
      }
    }
    return maxPressure;
  },

  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0) {
      minPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.reading.pressure < minPressure) {
          minPressure = station.reading.pressure;
        }
      }
    }
    return minPressure;
  },

  pressureTrend(station) {
    let readings = 0;
    if (station.readings.length > 2) {
      if (
        station.readings[2].pressure > station.readings[1].pressure &&
        station.readings[1].pressure > station.readings[0].pressure
      ) {
        readings = 1;
      } else if (
        station.readings[2].pressure < station.readings[1].pressure &&
        station.readings[1].pressure < station.readings[0].pressure
      ) {
        readings = -1;
      }
    }
    return readings;
  },
};

module.exports = stationAnalytics;
