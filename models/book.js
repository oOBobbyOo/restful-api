import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  img_url: {
    type: String
  },
  buy_url: {
    type: String
  }
}, {
  timestamps: true
});

export default mongoose.model("Book", bookSchema);