import { Game } from "../models/game.js";
import { Review } from "../models/review.js";

function index(res, req) {
  Review.find({})
    .then(review => res.json(review))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

async function create(req, res) {
  // console.log("reqboddddy ", req.body.id);
  // console.log("parrrams ", req.params);
  // console.log("paramms id ", req.params.id);

  // console.log("game find here ", Game.find({ apiId: req.body.id }));
  const existingGame = await Game.findOne({ apiId: req.body.apiId });
  if (!existingGame) {
    console.log("if if if if block running");

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
    // Review.create(req.body)
    //   .then(review => {
    //     review.populate("author").then(populatedReview => {
    //       res.json(populatedReview);
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    //   });
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

function show(req, res) {
  Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

function update(req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(review => res.json(review))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

function indexComment(res, req) {
  Comment.find({})
    .then(comment => res.json(comment))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

function createComment(req, res) {
  req.body.author = req.user.profile;
  Comment.create(req.body)
    .then(comment => {
      comment.populate("author").then(populatedComment => {
        res.json(populatedComment);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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
  show,
  update,
  indexComment,
  createComment,
  // showComment,
  deleteComment,
};
