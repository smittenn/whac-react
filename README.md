# Whac React: A 3D Whac-A-Mole Simulator

## About
For this assignment, I knew I wanted to make a 3D game and decided to experiment with using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction). React-three-fiber is a React renderer for three.js.

I found inspiration in their examples and I created my game using different techniques I learned there.

The end result ended up feeling like equal parts game and physics simulator. I liked the look of simple materials and colors on these 3D objects.

## What I did
* Created React components for all the elements of the game
* Created a simple application state via [Valtio](https://github.com/pmndrs/valtio)
* Used Physics based hooks from [Cannon](https://github.com/pmndrs/use-cannon)
* Did some modeling in Blender. Created models from scratch and modified found models.
* Generated .glb/.gtlf files

## If I had more time
* Use collision checking with the mallet to increment score
* Add a way to reset the game
* Add a timer for the game
* Add a sound that plays when a mole is whacked
* Make the mole movement feel more random
* Make the game more satisfying to play, generally improve the feel of it

## Running it locally
Install the dependencies
#### `npm install`

Then the application in the development mode.
#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

## Precompiled
The precompiled application can be found in the `docs` folder. To serve the compiled version use:
#### `serve -s docs`

The application can be re-built with:
#### `npm run-script build`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).