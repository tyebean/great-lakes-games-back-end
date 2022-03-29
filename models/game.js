import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    apiId: Number,
    image: String,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

export { Game };
