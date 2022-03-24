import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  text: String,
}, {
  timestamps: true
})

// "These [Numbers Property] will correspond with third party API"
const reviewSchema = new mongoose.Schema({
  experience: String,
  //todo: make sure date works correctly when we display it in jsx
  date: Date.now(),
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  gameId: Number,
  comments: [commentSchema],
},{
    timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {Review}
