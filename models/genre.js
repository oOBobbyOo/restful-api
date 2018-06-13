import mongoose from "mongoose";
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Genre", genreSchema);