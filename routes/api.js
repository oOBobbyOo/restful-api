import express from "express";
import mongoose from "mongoose";
import Genre from "../models/genre";
import Book from "../models/book";

const router = express.Router();
const db = "mongodb://bobby:pwd123@ds259070.mlab.com:59070/resetful-api";

mongoose.connect(
  db,
  err => {
    if (err) {
      console.log("Error!" + err);
    } else {
      console.log("Connected to mongodb!");
    }
  }
);

router.get("/", (req, res) => {
  res.send("from api router");
});

// get genres
router.get("/genres", (req, res) => {
  Genre.findOne((error, genres) => {
    if (error) {
      console.log('get genres error!', error)
    } else {
      res.status(200).send(genres);
    }
  })
});

// add genre
router.post("/genres", (req, res) => {
  let genreData = req.body;
  let genre = new Genre(genreData);

  genre.save((error, genreData) => {
    if (error) {
      console.log("add genre error!" + error);
    } else {
      res.status(200).send(genreData);
    }
  });
});

// update genre 
router.put("/genres/:_id", (req, res) => {
  let query = {
    _id: req.params._id
  }
  let update = {
    name: req.body.name
  }
  Genre.findOneAndUpdate(query, update, {}, (error, genre) => {
    if (error) {
      console.log('update genre error!', error)
    } else {
      res.status(200).send(genre);
    }
  })
});

// remove genre
router.delete("/genres/:_id", (req, res) => {
  let _id = req.params._id

  Genre.remove({
    _id: _id
  }, (error, genre) => {
    if (error) {
      console.log('remove genre error!', error)
    } else {
      res.status(200).send(genre);
    }
  })
});

// get books
router.get("/books", (req, res) => {
  Book.findOne((error, books) => {
    if (error) {
      console.log('get books error!', error)
    } else {
      res.status(200).send(books);
    }
  })
});

// get book by id
router.get("/books/:_id", (req, res) => {
  let _id = req.params._id;

  Book.findById({
    _id: _id
  }, (error, book) => {
    if (error) {
      console.log("get book by id error!" + error);
    } else {
      res.status(200).send(book);
    }
  })
});

// add book
router.post("/books", (req, res) => {
  let bookData = req.body;
  let book = new Book(bookData);

  book.save((error, bookData) => {
    if (error) {
      console.log("post book error!" + error);
    } else {
      res.status(200).send(bookData);
    }
  });
});

// update book 
router.put("/books/:_id", (req, res) => {
  let query = {
    _id: req.params._id
  }
  let update = req.body

  Book.findOneAndUpdate(query, update, {}, (error, book) => {
    if (error) {
      console.log('update book error!', error)
    } else {
      res.status(200).send(book);
    }
  })
});

// remove book
router.delete("/books/:_id", (req, res) => {
  let _id = req.params._id

  Book.remove({
    _id: _id
  }, (error, book) => {
    if (error) {
      console.log('remove book error!', error)
    } else {
      res.status(200).send(book);
    }
  })
});

export default router;