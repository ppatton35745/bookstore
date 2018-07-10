const $ = require("jquery");
const Books = require("./books");
const Dom = require("./dom");
const Api = require("./api");
const Evnts = require("./evnts");

sessionStorage.setItem("currentUserId", 1);
currentUserId = sessionStorage.getItem("currentUserId");

Books.read(currentUserId);