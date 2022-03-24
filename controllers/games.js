import { Game } from "../models/game.js";

function index(res, req) {
  //find all games
  res.send( "game is", Game );
  res.send('these are gonna be our games')
}

export {
  index,
}

