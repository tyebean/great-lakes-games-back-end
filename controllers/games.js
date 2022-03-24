import { Game } from "../models/game";

function index(res, req) {
  //find all games
  res.send('therse are gonna be our games')
}

export {
  index,
}

