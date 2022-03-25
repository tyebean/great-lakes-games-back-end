import { Comment } from "../models/comment.js";

function index(res, req) {
  Comment.find({})
  .then(comments => res.json(comments))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res){
  console.log("");
}

function deleteComment(req, res){
  console.log("");
}

function show(req, res){
  console.log("");
}

export {
  index,
  create,
  deleteComment as delete,
  show,
}

