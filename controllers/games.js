import { Game } from "../models/game.js";
import axios from "axios";
const rawgUrl = "https://api.rawg.io/api/games";
// https://api.rawg.io/api/games?key=5ed4cae01e874fd5a1aa307757726f77

function index(req, res) {
  Game.find({})
    .then((game) => res.json(game))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function getRawgGames(req, res) {
  if (req.query.id) {
    // console.log(req.query.id)
    axios.get(`${rawgUrl}/${req.query.id}?key=${process.env.RAWG_KEY}`).then((response) => {
      // console.log(response.data)
      res.status(200).json(response.data);
    });
  } else {
    axios.get(`${rawgUrl}?key=${process.env.RAWG_KEY}`).then((response) => {
      res.status(200).json(response.data.results);
    });
  }
}

function show(req, res) {
  Game.findById(req.params.id)
    .then((game) => res.json(game))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export { index, show, getRawgGames };
