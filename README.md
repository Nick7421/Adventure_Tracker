# Adventure Tracker
This application uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`). This app is used to input GPS tracking data to save adventures and display the locations on google maps. Search through the REI database for hikes near you.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)





## Development Setup Instructions

* Run `npm install`
* brew services start postgresql`
* Create Database from database.sql
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`


Once the project is up and running register an account and login. You will then be greeted with this homepage. 


![comments](wireframes/AdventureTracker2.png)

Once you are at the homepage you are now able to add adventures. Just input all the required fields and all your great adventures will be stored. You will now be able to revist locations and see the amazing places you have been. 


## Working on the following features

* implementation of the REI API for searching of hikes in specific areas. 
* Open weather api for hiking forecast. 










