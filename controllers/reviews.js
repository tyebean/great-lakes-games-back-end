import { Game } from "../models/game.js";
import { Review } from "../models/review.js";

function index(res, req) {
  Review.find({})
    .then(review => {
      return res.json(review);
    })

    .catch(err => {
      console.log(err);
    });
}

async function create(req, res) {
  const existingGame = await Game.findOne({ apiId: req.body.apiId });
  if (!existingGame) {
    const newGame = await Game.create(req.body);
    const review = await Review.create(req.body);
    newGame.reviews.push(review._id);
    await newGame.save();
    return res.status(201).json(review);
  } else {
    console.log("else block running");
    const review = await Review.create(req.body);
    existingGame.reviews.push(review._id);
    await existingGame.save();
    return res.status(201).json(review);
  }
}

function deleteReview(req, res) {
  Review.findByIdAndDelete(req.params.id)
    .then(review => res.json(review))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// function show(req, res) {
//   Review.findById(req.params.id)
//     .then(review => res.json(review))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// }

// function show(req, res) {
//   console.log("game find one", Game.findOne(req.params.id));
//   Game.findOne(req.params.id)
//   .then(game => {
//     Game.populate("Review").then
//     (populatedGame => {
//       res.json(populatedGame);
//     });
//   })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// }

function update(req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(review => res.json(review))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

function indexComment(res, req) {
  Review.findOne(req.params.id)
    .populate("comments")
    .then(comments => {
      console.log(comment);
      res.json(comment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

async function createComment(req, res) {
  const foundReview = await Review.findById(req.params.id);
  console.log(foundReview.comments);
  foundReview.comments.push(req.body);
  await foundReview.save();
  return res.status(201).json(foundReview);
}

function deleteComment(req, res) {
  Comment.findByIdAndDelete(req.params.id)
    .then(review => res.json(review))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// function showComment (req, res){
//   Review.findById(req.params.id)
//   .then(review => res.json(review))
//   .catch(err => {
//     console.log(err)
//     res.status(500).json(err)
//   })
// }

export {
  index,
  create,
  deleteReview as delete,
  // show,
  update,
  indexComment,
  createComment,
  // showComment,
  deleteComment,
};
