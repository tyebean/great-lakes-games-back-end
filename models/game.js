import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  apiId: Number,
  reviews: {type: mongoose.Schema.Types.ObjectId, ref: "Review"},
},{
    timestamps: true,
})

const Game = mongoose.model('Game', gameSchema)

export { Game } 