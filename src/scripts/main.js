const $ = require("jquery");
const Books = require("./books");
const api = require("./api");
const Dom = require("./dom");

const attemptLogin = (userName, password) => {
  api.users.read().then(users => {
    users.forEach(user => {
      if (user.name === userName && user.password === password) {
        sessionStorage.setItem("currentUserId", user.id);
        Books.read(user.id);
      }
    });
  });
};

const currentUserId = sessionStorage.getItem("currentUserId");
if (currentUserId) {
  Books.read(currentUserId);
} else {
  const testVar = $("#target-container");
  console.log(testVar.val());
  console.log(testVar.text());
  Dom.showLogin(attemptLogin);
}
