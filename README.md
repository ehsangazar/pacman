# Pacman Game

This is a game written in JavaScript.

## Scripts

- `npm install` install all dependencies
- `npm run dev` for development run
- `npm run start` for production run
- `npm run test` to run tests

## Rules

- The origin (0,0) is SOUTH WEST.
- Pacman moving off the grid is prevented
- You can create a new command file in `./commands` folder and address it in `index.js`

## Game Commands

- `PLACE X,Y,F`
  -> F can be NORTH,SOUTH, EAST or WEST
  -> First calid command should be `PLACE`, everything before the first `PLACE` will be ignored
  -> We can have multiple `PLACE` commands
- `MOVE` will move Pacman one unit forward in the direction it is currently facing.
- `LEFT` and `RIGHT` will rotate Pacman 90 degrees
- `REPORT` will announce the X,Y and F of Pacman

## Author

- Ehsan Gazar
