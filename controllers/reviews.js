import { Review } from "../models/review.js";

function index(res, req) {
  //find all reviews
  res.send( "review is", Review );
  res.send('these are gonna be our reviews')
}

export {
  index,
}
