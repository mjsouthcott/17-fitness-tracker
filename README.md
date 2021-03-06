# Fitness Tracker

![GitHub followers](https://img.shields.io/github/followers/mjsouthcott?label=Follow&style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/mjsouthcott/17-fitness-tracker)
![GitHub top language](https://img.shields.io/github/languages/top/mjsouthcott/17-fitness-tracker)
![GitHub last commit](https://img.shields.io/github/last-commit/mjsouthcott/17-fitness-tracker)

## Table of Contents

* [Description](#description)
* [Technologies Used](#technologies-used)
* [User Story](#user-story)
* [Installation](#installation)
* [Usage](#usage)
* [License](#licence)
* [Contributing](#contributing)

## Description

This is a web application that allows users to view, create and track daily workouts. It is fully responsive and uses MongoDB in the back-end.

## Technologies Used

* `HTML5`
* `CSS3`
* `Javascript`
* `Node.js`
* `Express.js`
* `MongoDB`
* Various `npm` Packages (`morgan` and `mongoose`)

## User Story

```
AS A user
I WANT to be able to view, create and track daily workouts, log multiple exercises in a workout on a given day, and track the name, type, weight, sets, reps and duration of exercises
SO THAT I can keep fit.
```

## Installation

To install the application, click "Clone or download", copy the URL, launch Git Bash, navigate to your desired directory and use
```
git clone
```
followed by the copied URL.

To launch the deployed application, click the following link: https://infinite-wildwood-90953.herokuapp.com/.

## Usage

Launch Git Bash and navigate to the application's root directory. Once there, use
```
npm i
```
to install the dependencies, followed by
```
node server.js
```
to run the application. Open a browser window and go to
```
https://localhost:3000
```

![Step 1](https://github.com/mjsouthcott/17-fitness-tracker/blob/master/demo/image1.PNG)

To create a workout, click "New Workout".

![Step 2](https://github.com/mjsouthcott/17-fitness-tracker/blob/master/demo/image2.PNG)

To add an exercise, select an exercise type from the "Exercise Type" dropdown.

![Step 3](https://github.com/mjsouthcott/17-fitness-tracker/blob/master/demo/image3.PNG)

To add a resistance exercise, enter the exercise name, weight, number of sets, number of reps and duration, and click "Add Exercise".

![Step 4](https://github.com/mjsouthcott/17-fitness-tracker/blob/master/demo/image4.PNG)

To add a cardio exercise, enter the name, distance and duration, and click "Add Exercise". Add a few more exercises and click "Complete" to finish creating the workout.

![Step 5](https://github.com/mjsouthcott/17-fitness-tracker/blob/master/demo/image5.PNG)

You'll now be presented with a summary of the workout you just created. To view the workout dashboard, click "Workout Dashboard".

![Step 6](https://github.com/mjsouthcott/17-fitness-tracker/blob/master/demo/image6.PNG)

You'll now be presented with a number of graphs summarizing your workouts.

## Licence

MIT License

Copyright (c) 2020 Matthew James Southcott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

Feel free to email me if you'd like to contribute.
