# Pixel Art Maker Project

## Table of Contents

* [Project Description](#project-description)
* [Instructions](#instructions)
* [Development Strategy](#development-strategy)
* [Contributing](#contributing)

## Project Description

Building of a single-page web app that allows users to draw pixel art on a customizable canvas!

## Instructions

The starter Template provided by [Udacity](https://www.udacity.com/) includes all required HTML input fields, as well as some basic styling. A skeleton of the makeGrid() function is provided as well.

The Starter Template can be downloaded through either:

  * [The Pixel Art Maker repository on GitHub](https://github.com/udacity/project-pixel-art-maker-starter)
  * [This zipped folder](https://github.com/udacity/project-pixel-art-maker-starter/archive/master.zip)

The starter template contains basic styling, but feel free to style the app as you please! You should write your code and markup to meet the specifications provided in these style guides:

  * [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
  * [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
  * [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
  * [Git Style Guide](https://udacity.github.io/git-styleguide/)

## Development Strategy

Before writing any code, try loading up index.html from the starter project to see how things look! Notice that the design.js file is implemented in the <body> tag in the index.html file. Your goal is to build out the design.js file to achieve all the interactive elements on the page!

Now, open up design.js. As you start writing your code, keep these three tasks in mind:

1.  Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into     play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to     be stored as well, since the clicked cell in the table needs to be set to the selected color.
2.  Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by       the user.
3.  Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to       dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color       of the cell to the selected color.

Now test it! When you're done, you should be able to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.

Note: To complete Pixel Art Maker, you must be using the current version of [Edge](https://www.microsoft.com/en-us/download/details.aspx?id=48126), [Firefox](https://www.mozilla.org/en-US/firefox/new/), or [Chrome](https://support.google.com/chrome/answer/95346?hl=en).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
