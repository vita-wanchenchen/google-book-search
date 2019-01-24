import axios from "axios";
// Google Books public search url
const BOOKSEARCHURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

   // Get all books meet the search
  search: function(query) {
    return axios.get(BOOKSEARCHURL + query);
  },
  // Get all books saved in database.
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Get A book by ID
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Delete book by ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

};