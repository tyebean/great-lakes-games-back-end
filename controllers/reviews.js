import { Review } from "../models/review.js";

function index(res, req) {
  Review.find({})
  .then(review => res.json(review))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res){
  console.log("");
}

function deleteReview(req, res){
  console.log("");
}

function show(req, res){
  console.log("");
}

function update(req, res){
  console.log("");
}

export {
  index,
  create,
  deleteReview as delete,
  show,
  update,
}
