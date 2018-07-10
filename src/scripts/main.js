const $ = require("jquery");
const Books = require("./books");

sessionStorage.setItem("currentUserId", 1);
currentUserId = sessionStorage.getItem("currentUserId");
console.log(Books);
Books.read(currentUserId);