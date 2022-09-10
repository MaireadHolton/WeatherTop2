"use strict";

    
const stationAnalytics = {
  getReadings(station) {
    let readings = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1];
    }
    return readings;
  },
  
  getMaxReading(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0];
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
  
    getMaxReading(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        maxReading = station.readings[i];
      }
    }
    return maxReading;
  },
      
getTempF(temp) {
    return temp * 1.8 + 32;
  },
      
getWindSpeed(station) {
  let lastWindSpeed = 0;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].windSpeed;
    }
    return lastWindSpeed;
  },
      
  getBeaufort (windSpeed){
    let Beau = null;
      if (windSpeed == 0) {
      return 0;
      Beau= "Calm";
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
      
getWindDirection(station) {
    let windDirection = null;
    if (station.readings.length > 0) {
      readings = station.readings[station.readings.length - 1].windDirection;
    }
    return windDirection;
  },
     
getWindComp (windDirection) {
    if (windDirection > 11.25 && windDirection <= 33.75) {
      return "North North East";
    } else if (windDirection > 33.75 && windDirection <= 56.25) {
      return "East North East";
    } else if (windDirection > 56.25 && windDirection <= 78.75) {
      return "East";
    } else if (windDirection > 78.75 && windDirection <= 101.25) {
      return "East South East";
    } else if (windDirection > 101.25 && windDirection <= 123.75) {
      return "East South East";
    } else if (windDirection > 123.75 && windDirection <= 146.25) {
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
  }
};    
      
      
module.exports = stationAnalytics;

      