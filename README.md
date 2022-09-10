Name: Mairead Holton
==============================
Student No. 20099850
==============================

# **WeatherTop**

This is a simple app to supplement weatherTop2 weather stations in Waterford Ireland. Users can add and delete weather readings for different stations and add and delete stations. The latest weather conditions are also displayed for each station.

## **Structure**

The controllers folder contains the javaScript classes used in controlling the app.

*about.js:* <br>
renders the about.hbs file and displays information about the app and contact details for the company

*accounts.js:* <br>
Contains methods for user signup (renders signup.hbs line 27-32), login (renders login.hbs line 15-20), register (line 34-40), authentication for registered users (checks the user email and password match the member id line 42-line 52), 
logout (clears the session line 22-25) and a method to get the logged in user (determines if a user is logged in line 54-61).

*dashboard.js:* <br>
Contains a method for displaying the active stations for a user (renders dashboard.hbs line 22). 
Also contains methods to delete a station (line 35-40) and add a station (line 42-line 55).

*reading.js:*<br>
takes in elements for the reading object (code, temp, windSpeed, windDir & pressure, lines 24-28) for each station using the station-store model

*station.js:*<br>
takes in elements for the station object from the station-store model (line 12) and the calculated elements for the latest reading from 
the StationAnalystics util (line 13- line 22). Also has a class for station summary of readings (lines 27-47), a class to delete a reading
(line 52 - 58 & a class to add a reading (line 60-84)

The models folder contains the classes for modelling the user and station objects.

*station-store.js: *<br>
Contains methods to model the station class. Has methods to get user stations (line 42-44), find the station in the collection & return the stations (line 16-18 & line 12-14).
Also contains methods to add a station (line 20-23) and remove station (line 25-28). There are also some methods to update readings (line 61-66) and remove readings (line 46-51).

*station-store.json:* <br>
contains the data for stations and station readings which is used by station-store.js.

*user-store.js:* <br>
Contains methods to model the accounts class. contains methods to add users (line 14-17), return users by email, password and id (line 19-30).

*user-store.json:* <br>
contains the user data for user accounts which is used by user-store.js.

The utils folder contains the class for calculating the most recent weather conditions for the station

*StationAnalytics.js:* <br>
Contains method to return the most recent reading for weather code (getCode: line 12-18), temperature (getTemp: line 66-72), wind speed (getWindSpeed: line 122-128), 
wind direction (getWindDir: line 219-224) and pressure (getPressure: line 272-277). It also contains methods to determine the weather conditions 
(getCodeToWeather: line 20-40), the weather icon (getWetherCodeIcons line 43-62), the temperature in fahrenheit (getTempF: line 118-120), calculating the lowest and highest 
temperature (getMinTemp: line 87-98, getMaxTemp: line 74-85), the lowest and highest wind speed (getMinWind: line 143-154, getMaxWind: 130-141), the beaufort 
number and label (getBaufort: line 174-217), the wind compass (getWindComp: line 227-260), the wind chill (getWindChill: line 263-270),
the highest and lowest pressure readings (getMaxPressure: line 280- 290, getMinPressure: line 293-304), and finally trends for temperature (tempTrend: line 100 - 115), wind (windTrend: line 156 - 172)
and pressure (pressureTrend: line 306-322).


### **Design**

The views folder in the weatherTop project contains html files that control the display elements of the app. UI elements are employed in the app.

*main.hbs:* <br>
Sets the main layout for the app (line 13)

*login.hbs:* <br>
A grid structue is diplayed to allow the user to login using email and password (line 5-line 14). UI elements for header (line 6), login button (line 13) and 
images (line 17) are employed.

*signup.hbs:* <br>
A ui 2 column grid structure is employed for a segment in this page (line 3-line 31). A UI form is employed to allow user to enter their details to register on the app
(line 7-28). UI button (line 27) used to allow user to submit information. UI image element used to display the weathertop logo (line 5)

*welcomemenu.hbs:* <br>
Partial to display the menu bar on starting the app to direct the user to register or login

*index.hbs:* <br>
Displays the welcome menu (line 1) indicates that a user has to login or signup.

*about.hbs:* <br>
Contains sections explaining the app (line 7-10) and contact details for weathertop Inc. (line 17-line 25)

*menu.hbs:* <br>
Partial to display the menu bar with dashboard, about and logout buttons to direct a user once logged in

*dashboard.hbs:* <br>
Calls the liststation partial (line 7) and addstation partial (line 11).

*reading.hbs:* <br>
Calls the menu partial (line 1). Displays a 5 field form (line 3-27) to allow a user to update a reading by inputting values for code, temperature, wind speed,
wind direction and pressure. UI submit button also included to update the readings (line 26).

*station.hbs:* <br>
Calls the menu partial (line 1). Calls station-panel, reading-table and addreading partials to display the station display, the readings for the station and
a form to submit a reading within the station (line 7-9).

*addstation.hbs:* <br>
Partial to add a new station to the dashboard, creates a form with boxes for the user to add all of the information required to create a new station (line 1-17)

*addreading.hbs:* <br>
Partial for the user to add a reading to a station. UI form with five fields to add values for code, temperature, wind speed, wind direction,
and pressure (line 1-26).

*lastreadings.hbs:* <br>
a partial to display a table of all of the latest readings for the station (line 1-75).

*liststations.hbs:* <br>
Partial to display a station and it's latest readings to the dashboard (line 5). Also contains UI buttons to open a folder and delete the station.

*reading-header.hbs:* <br>
partial to display the header for the reading table

*reading-row.hbs:* <br>
partial to display the each reading in a row of a table from the station.js file.

*reading-table.hbs:* <br>
partial to combine the reading-header (line 3) and reading-row (line 6) partials to form a complete table.

*station-panel.hbs:* <br>
calls the last readings to display a summary of the latest readings at the station (line 2)

#### **Elements used**

As mentioned above object classes for account, reading and station were used. Bespoke methods were employed in almost all classes e.g. deleteStation method in the 
Dashboard class for deleting the station (line 35-40) and the addReading method in the station class (line 60-85). 
UI elements were employed for the display and interaction from the user e.g. the use of forms to enter readings in a station (addreading.hbs line 1-26), the use of 
buttons to open and delete stations on the dashboard (addstation.hbs line 16) and the use of fomantic icons to display the current weather conditions 
(lastreadings.hbs line 21). In the StationAnalytics class if and else statements were used (line 176-217 & line 227-261). for loops were also used (line 147-151 & line 284-288).
Switch statements were used to determine the weather icon based on the weather code (line 20-62).


#### **Deployment**

I have not deployed my App

##### **Sources**

[JavaScript] https://www.w3schools.com/js/default.asp

[icons] https://fomantic-ui.com/elements/icon.html

[UI elements] https://semantic-ui.com/collections/table.html

[weather information for Waterford] https://www.climatestotravel.com/climate/ireland/waterford

[map] https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9771.925642800465!2d-7.1500992!3d52.2437213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97d82caf811c31e!2sWaterford%20Ind%20Est!5e0!3m2!1sen!2sie!4v1652716355462!5m2!1sen!2sie" 

[power element] https://www.geeksforgeeks.org/math-pow-method-in-java-with-example/


