import { Game } from "../models/game.js";

function index(res, req) {
  Game.find({})
  .then(games => res.json(games))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
}

