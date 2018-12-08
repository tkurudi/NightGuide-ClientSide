# NIGHTGUIDE

## Week 8-9 Large group project 

The focus of this app is to practice using the Full Stack we have learnt, (and new technology [react native]) in a large scale app.

The idea of the app is to create a **"stargazing - astronomical"** style app for people to visit and check **WEATHER (with visibility)**, **LOOKOUT reccomendations (x and y coordinates)**, **what constellations they can see in wellington**.

---

### Technology
+ React Native
+ Redux
+ API's
+ Using Sensors in React Native
+ Database Knex
+ Express
+ JWT Auth (Local)
+ SVG
+ Postman
+ React
 
 ---
 ### User Stories

 #### MVP
+ As a user I want to be able to .. Observe the weather and the visibility for the city/country I am in.

+ As a user I want to be able to .. Find all of the best Lookout points to view stars and planets around Wellington, using cordinates and querying a Google Maps API.

+ As a user I want to be able to .. Learn more about certain planets and constellations and get some info on when they might be seen

---


#### Stretch

+ As a user I want to be able to .. Observe which planets and constellations I can see from Wellington on a specific night

+ As a user I want to be able to .. Use augmented reality with the constellations and actually see them in the sky based on where they actually are!(a technology that superimposes a computer-generated image on a user's view of the real world, thus providing a composite view.)

+ As a user I want to be able to .. See some interesting photos from NASA

+ As a user I want to be able to .. Add my timezone to my profile

+ As a user I want to be able to .. See Satellites   

+ As a user I want to be able to .. Search for things (specific planets or constellations ect..) 
 
+ As a user I want to be able to .. Post about meetups and find local meetups in my area.

+ As a user I want to be able to .. To log in and have a profile

+ As a user I want to be able to .. Turn lights on and lights off as a feature
 ----

 ## Views (Client Side)

  | components | purpose |
  | --- | --- |
  | Landing | View of opening page with logo |
  | NightGuideLogo | Night guide logo svg |
  | InstructionContainer | Holds the Menu and Welcome instructions |
  | WelcomeInstruction  | View with welcome message on first open of app |
  | MenuInstruction | View with menu instructions (use of app) on first open on app |
  | Home | View to contain initial page with nav bar buttons |
  | NavBar | View for navigation buttons |
  | Weather  | View to see weather in your area for stargazing |
  | ConstellationList | Shows a list of common constellations |
  | ConstellationDetails | Shows more info on specific constellation |
  | PlanetList | Shows list of planets in solar system |
  | PlanetDetails  | Shows more info on specific planet |
  | LookoutList | Shows specific lookouts in your area and on a map |
  | LookoutDetails | Shows more details on the specific lookout |

  | name | purpose |
  | --- | --- |
  | Weather query API| Search for your local weather |
  | Query Lookout Points API | Search for local Lookout Points |
  | Query constellations API | Search for constellations in your area |
  | Query planet API  | Search for planets that you can see in your area |
  | ###  | #### |
  | ## | ###  |
 
---

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/lookouts | No | Get the list of lookout points | Array of Objects (object = coords) |
| Get | /api/lookouts/:id | No | Get the specific lookout point based on the ID | Object (object = coords) |
| Get | /api/constellations | No | Get the list of constellations points | Array of Objects (object = coords) |
| Get | /api/constellations/:id | No | Get the specific constellation based on the ID| Object (object = coords) |
| Get | /api/planets | No |Get the list of planets points| Object (object = coords) |
| Get | /api/planets/:id | No | Get the specific planets based on the ID| Object (object = coords) |
| Get | /api/weather | No | Get an object with an array of current weather properties based on what city you search.. | Array of Objects (object = coords) |
---

### lookout backend knex
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each lookout point |
  | name | string | what is the name of the lookout point |
  | location | string |what is the location of the lookout point |
  | description | string | small description of the lookout point.. |




## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```
