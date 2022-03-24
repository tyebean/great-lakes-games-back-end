import { Comment } from "../models/comment.js";

function index(res, req) {
  //find all comments
  res.send( "comment is", Comment );
  res.send('these are gonna be our comments')
}

export {
  index,
}
