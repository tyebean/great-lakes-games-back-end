import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  text: String,
}, {
  timestamps: true
})

const reviewSchema = new mongoose.Schema({
  text: String,
  date: Date,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  gameId: Number,
  comments: [commentSchema],
},{
    timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export { Review }
