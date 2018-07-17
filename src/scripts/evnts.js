const $ = require("jquery");
// const Books = require("./books");
// const Dom = require("./dom");

const evnts = {
  addNewBook: function() {
    $("#addNewBookButton").hide();
    $("#newTitleInput")
      .show()
      .focus();
    $("#newSummaryInput").show();
    $("#newPagesInput").show();
    $("#saveNewButton").show();
    $("#cancelNewButton").show();
  },
  saveNewBook: function(currentUserId) {
    const Books = require("./books");
    console.log(Books);
    Books.create(
      currentUserId,
      $("#newTitleInput").val(),
      $("#newSummaryInput").val(),
      $("#newPagesInput").val()
    );
  },
  cancelNewBook: function() {
    $("#addNewBookButton").show();
    $("#newTitleInput")
      .blur()
      .hide();
    $("#newSummaryInput").hide();
    $("#newPagesInput").hide();
    $("#saveNewButton").hide();
    $("#cancelNewButton").hide();
  },
  markAsRead: function(card, currentUserId) {
    const Books = require("./books");
    const bookId = card.attr("bookId");
    const title = card.children(".title").text();
    const summary = card.children(".summary").text();
    const pages = card.children(".pages").text();

    Books.update(bookId, currentUserId, title, summary, pages, "true");
  },
  editBook: function(card) {
    const title = card.children(".title");
    const summary = card.children(".summary");
    const pages = card.children(".pages");
    const markAsReadBox = card.children(".markAsReadBox");
    const markAsReadLabel = card.children(".markAsReadLabel");
    const titleEdit = card.children(".titleEdit");
    const summaryEdit = card.children(".summaryEdit");
    const pagesEdit = card.children(".pagesEdit");

    title.hide();
    summary.hide();
    pages.hide();
    markAsReadBox.hide();
    markAsReadLabel.hide();
    // card.children(".editButton").hide();
    card.children(".deleteButton").hide();

    titleEdit.val(title.text()).show();
    summaryEdit.val(summary.text()).show();
    pagesEdit.val(pages.text()).show();
    card.children(".saveEditButton").show();
    card.children(".cancelEditButton").show();
  },
  saveBookEdits: function(card, currentUserId) {
    const Books = require("./books");
    const bookId = card.attr("bookId");
    const title = card.children(".titleEdit").val();
    const summary = card.children(".summaryEdit").val();
    const pages = card.children(".pagesEdit").val();

    Books.update(bookId, currentUserId, title, summary, pages, "false");
  },
  cancelBookEdits: function(card) {
    const title = card.children(".title");
    const summary = card.children(".summary");
    const pages = card.children(".pages");
    const markAsReadBox = card.children(".markAsReadBox");
    const markAsReadLabel = card.children(".markAsReadLabel");
    const titleEdit = card.children(".titleEdit");
    const summaryEdit = card.children(".summaryEdit");
    const pagesEdit = card.children(".pagesEdit");

    title.show();
    summary.show();
    pages.show();
    markAsReadBox.show();
    markAsReadLabel.hide();
    card.children(".editButton").show();
    card.children(".deleteButton").show();

    titleEdit.hide();
    summaryEdit.hide();
    pagesEdit.hide();
    card.children(".saveEditButton").hide();
    card.children(".cancelEditButton").hide();
  },
  deleteBook: function(card, currentUserId) {
    const Books = require("./books");
    const bookId = card.attr("bookId");
    Books.delete(bookId, currentUserId);
  }
};

module.exports = evnts;
