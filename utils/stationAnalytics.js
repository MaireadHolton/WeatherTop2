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
      
 weatherCodeIcons(code) {
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
      
getTempF(temp) {
    return temp * 1.8 + 32;
  },
      
getWindSpeed(station) {
  let lastWindSpeed = 0;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].windspeed;
    }
    return lastWindSpeed;
  },
      
  getBeaufort (windSpeed){
        if (windspeed == 0) {
      return 0;
    } else if (windspeed >= 1 && windspeed <= 5) {
      return 1;
    } else if (windspeed >= 6 && windspeed <= 11) {
      return 2;
    } else if (windspeed >= 12 && windspeed <= 19) {
      return 3;
    } else if (windspeed >= 20 && windspeed <= 28) {
      return 4;
    } else if (windspeed >= 29 && windspeed <= 38) {
      return 5;
    } else if (windspeed >= 39 && windspeed <= 49) {
      return 6;
    } else if (windspeed >= 50 && windspeed <= 61) {
      return 7;
    } else if (windspeed >= 62 && windspeed <= 74) {
      return 8;
    } else if (windspeed >= 75 && windspeed <= 88) {
      return 9;
    } else if (windspeed >= 89 && windspeed <= 102) {
      return 10;
    } else if (windspeed >= 103 && windspeed <= 117) {
      return 11;
    } else if (windspeed >= 117) {
      return 12;
    }
    return -1;
  },

      


      