# Whac React: A 3D Whac-A-Mole Simulator

## About
For this assignment, I knew I wanted to make a 3D game and decided to experiment with using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), a React renderer for three.js.

I found inspiration in their examples and I created my game combining different techniques I learned there.

The end result ended up feeling like equal parts game and physics simulator. I liked the look of simple materials and colors on these 3D objects.

## What I did
* Created React components for each element of the game
* Animated elements via `useFrame` and other means from [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* Created a simple application state via [valtio](https://github.com/pmndrs/valtio)
* Created simple physics with [cannon](https://github.com/pmndrs/use-cannon)
* Did some modeling in Blender. Created models from scratch and modified found models.
* Generated .glb/.gtlf files

## With more time I would
* Use collision checking with the mallet to increment score
* Add a way to reset the game
* Add a timer for the game
* Add a sound that plays when a mole is whacked
* Make the mole movement feel more random
* Make the game more satisfying to play, generally improve the feel of it

## Running it locally
Install the dependencies: `npm install`

Then run the application in the development mode: `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Precompiled
The precompiled application can be found in the `docs` folder. To serve the compiled version use: `serve -s docs`

The application can be re-built with: `npm run-script build`

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).