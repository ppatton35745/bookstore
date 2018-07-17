const $ = require("jquery");
const Evnts = require("./evnts");

const buildBookCard = (book, currentUserId) => {
  const card = $("<div>")
    .attr("bookId", book["id"])
    .addClass("bookCard");
  const title = $("<h2>")
    .text(book["title"])
    .addClass("title")
    .on("dblclick", e => {
      Evnts.editBook(card, currentUserId);
    });
  const titleEdit = $("<input>")
    .addClass("titleEdit")
    .hide();
  const summary = $("<p>")
    .text(book["summary"])
    .addClass("summary");
  const summaryEdit = $("<input>")
    .addClass("summaryEdit")
    .hide();
  const pages = $("<p>")
    .text(book["pages"])
    .addClass("pages");
  const pagesEdit = $("<input>")
    .addClass("pagesEdit")
    .hide();
  const markAsReadBox = $("<input>")
    .attr({ type: "checkbox", checked: false })
    .addClass("markAsReadBox")
    .on("click", e => {
      Evnts.markAsRead(card, currentUserId);
    });
  const markAsReadLabel = $("<label>")
    .addClass("markAsReadLabel")
    .text("Mark as Read");
  // const editButton = $("<button>").text("Edit").addClass("editButton").on("click", (e) => {
  //     Evnts.editBook(card)
  // });
  const deleteButton = $("<button>")
    .text("Delete")
    .addClass("deleteButton")
    .on("click", e => {
      Evnts.deleteBook(card, currentUserId);
    });
  const saveButton = $("<button>")
    .text("Save")
    .addClass("saveEditButton")
    .on("click", e => {
      Evnts.saveBookEdits(card, currentUserId);
    })
    .hide();
  const cancelButton = $("<button>")
    .text("Cancel")
    .addClass("cancelEditButton")
    .on("click", e => {
      Evnts.cancelBookEdits(card, currentUserId);
    })
    .hide();

  return card
    .append(title)
    .append(titleEdit)
    .append(summary)
    .append(summaryEdit)
    .append(pages)
    .append(pagesEdit)
    .append(markAsReadBox)
    .append(markAsReadLabel)
    .append(deleteButton)
    .append(saveButton)
    .append(cancelButton);
};

const buildHeader = currentUserId => {
  const header = $("<div>").attr("id", "headerDiv");
  const headerTitle = $("<h1>").text("BookCollection");
  const addNewBookButton = $("<button>")
    .text("New Book")
    .attr("id", "addNewBookButton")
    .on("click", e => {
      Evnts.addNewBook(currentUserId);
    });
  const newTitle = $("<input>")
    .attr("id", "newTitleInput")
    .hide();
  const newSummary = $("<input>")
    .attr("id", "newSummaryInput")
    .hide();
  const newPages = $("<input>")
    .attr("id", "newPagesInput")
    .hide();
  const saveNewBook = $("<button>")
    .text("Save")
    .attr("id", "saveNewButton")
    .on("click", e => {
      Evnts.saveNewBook(currentUserId);
    })
    .hide();
  const cancelNewBook = $("<button>")
    .text("Cancel")
    .attr("id", "cancelNewButton")
    .on("click", e => {
      Evnts.cancelNewBook();
    })
    .hide();
  return header
    .append(headerTitle)
    .append(addNewBookButton)
    .append(newTitle)
    .append(newSummary)
    .append(newPages)
    .append(saveNewBook)
    .append(cancelNewBook);
};

const buildBody = (booksArr, currentUserId) => {
  const body = $("<div>").attr("id", "bodyDiv");
  booksArr.forEach(book => {
    body.append(buildBookCard(book, currentUserId));
  });
  return body;
};

const buildFooter = () => {
  const footer = $("<div>").attr("id", "footerDiv");
  const footerTitle = $("<h2>").text("Some stuff in the footer");
  return footer.append(footerTitle);
};

const dom = {
  buildDom: (booksArr, currentUserId) => {
    $("#target-container").empty();
    const header = buildHeader(currentUserId);
    const body = buildBody(booksArr, currentUserId);
    const footer = buildFooter();
    $("#target-container")
      .append(header)
      .append(body)
      .append(footer);
  },

  showLogin: attemptLogin => {
    const testVar = $("#target-container");
    console.log(testVar);
    $("#target-container").empty();
    const container = $("<div>").attr("id", "loginContainer");
    const userNameInput = $("<input>").attr("id", "loginUserNameInput");
    const userNamePwdInput = $("<input>").attr("id", "loginUserPwdInput");
    const loginSubmitButton = $("<button>")
      .attr("id", "loginSubmitButton")
      .on("click", () => {
        attemptLogin(userNameInput.val(), userNamePwdInput.val());
        userNameInput.val("");
        userNamePwdInput.val("");
      });
    $("#target-container").append(
      container
        .append(userNameInput)
        .append(userNamePwdInput)
        .append(loginSubmitButton)
    );
  }
};

module.exports = dom;
