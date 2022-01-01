const mongoose = require("mongoose");

const MovieScema = mongoose.Schema(
  {
    title: { type: String },
    desc: { type: string },
    img: { type: string },
    imgTitle: { type: string },
    imgsmall: { type: string },
    trailer: { type: sting },
    video: { type: string },
    year: { type: string },
    limit: { type: number },
    gener: { type: string },
    isSeries: { type: boolean, default: false },
  },
  { timestamp: true }
);
module.exports = mongoose.model("movie", MovieScema);
