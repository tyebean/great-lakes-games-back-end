import { Game } from "../models/game.js";

function index(res, req) {
  Game.find({})
  .then(game => res.json(game))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  Game.findById(req.params.id)
  .then(game => res.json(game))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  show,
}