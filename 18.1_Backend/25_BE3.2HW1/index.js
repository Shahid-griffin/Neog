const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

//1. Write a GET route "/" which sends a message "Hello, Express server.". Test your API with Postman.

app.get("/", (req, res) => {
  res.send("Hello, Express server");
});

// 2. Write a POST route "/books" which sends a new book into the pre-defined books array. Send an error message in case
//any of the data is missing in the request body. Test your API with Postman.
// New book to be added:   { id: 3, title: '1984', author: 'George Orwell', year: 1949
// Pre-defined books array:
// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
// ];

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

app.post("/books", (req, res) => {
  const newBook = req.body;

  if (!newBook.title || !newBook.author || !newBook.year) {
    res.status(400).json({ error: "all neccesay detail are needed" });
  } else {
    books.push(newBook);
    res
      .status(201)
      .json({ message: "Data is successfully added", book: newBook });
  }
});

//3. Write a GET route "/books" which sends the books array in response. Test your API with Postman.

app.get("/books", (req, res) => {
  res.send(books);
});

// 4. Write a POST route "/todos" which sends a new todo into the pre-defined todos array.
//  Send an error message in case any of the data is missing in the request body. Test your API with Postman.
// New todo to be added:   { id: 2, title: 'Go for a walk', day: 'Sunday' }
// Pre-defined todos array:

const todos = [{ id: 1, title: "Water the plants", day: "Saturday" }];

app.post("/todos", (req, res) => {
  const newTodos = req.body;
  if (!newTodos.title || !newTodos.day) {
    res.status(400).json({ error: "please update all the data field" });
  } else {
    todos.push(newTodos);
    res.status(201).json({ message: "data has been updated", todos: newTodos });
  }
});

// 5. Write a GET route "/todos" which sends the todos array in response. Test your API with Postman.

app.get("/todos", (req, res) => {
  res.send(todos);
});


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("port is running ")
})