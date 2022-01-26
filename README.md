# Whac React: A 3D Whac-A-Mole Simulator

## About
For this assignment, I knew I wanted to make a 3D game and decided to experiment with using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction). This library offers Three.js concepts as React components

I found inspiration in their examples and I created my game using different techniques I learned there.

The end result ended up feeling like equal parts game and physics simulator. I liked the look of simple materials on these 3D objects. I think it has a chill 80's aesthetic.

The moles move fairly slow and when clicked the mallet is swung to hit the moles

## What I did
* Used abstractions DREI https://github.com/pmndrs/drei
* Used Physics based hooks from Cannon https://github.com/pmndrs/use-cannon
* Did some modeling in Blender. Created models from scratch and modified found models.
* Generated .glb/.gtlf files

## If I had more time
* Use collision checking with the mallet to increment score
* Add a way to reset the game
* Add a timer for the game
* Add a sound that plays when a mole is whacked

## Running it locally

### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).