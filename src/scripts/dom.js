const $ = require("jquery");
const Evnts = require("./evnts");

const buildBookCard = (book) => {
    const card = $("<div>").attr("bookId", book["id"]);
    const title = $("<h2>").text(book["title"]).addClass("title");
    const titleEdit = $("<input>").addClass("titleEdit").hide();
    const summary = $("<p>").text(book["summary"]).addClass("summary");
    const summaryEdit = $("<input>").addClass("summaryEdit").hide();
    const pages = $("<p>").text(book["pages"]).addClass("pages");
    const pagesEdit = $("<input>").addClass("pagesEdit").hide();
    const markAsReadBox = $("<input>").attr({"type":"checkbox","checked":false}).addClass("markAsReadBox").on("click", (e) => {
        Evnts.markAsRead(card)
    });
    const editButton = $("<button>").text("Edit").addClass("editButton").on("click", (e) => {
        Evnts.editBook(card)
    });
    const deleteButton = $("<button>").text("Delete").addClass("deleteButton").on("click", (e) => {
        Evnts.deleteBook(card)
    });
    const saveButton = $("<button>").text("Save").addClass("saveEditButton").on("click", (e) => {
        Evnts.saveBookEdits(card)
    }).hide();
    const cancelButton = $("<button>").text("Cancel").addClass("cancelEditButton").on("click", (e) => {
        Evnts.cancelBookEdits(card)
    }).hide();

    return card.append(title).append(titleEdit).append(summary).append(summaryEdit).append(pages).append(pagesEdit)
        .append(markAsReadBox).append(editButton).append(deleteButton).append(saveButton).append(cancelButton);
}

const buildHeader = () => {
    const header = $("<div>").attr("id", "headerDiv");
    const headerTitle = $("<h1>").text("BookCollection");
    const addNewBookButton = $("<button>").text("New Book").attr("id", "addNewBookButton").on("click", (e) => {
        Evnts.addNewBook()
    });
    const newTitle = $("<input>").attr("id", "newTitleInput").hide();
    const newSummary = $("<input>").attr("id", "newSummaryInput").hide();
    const newPages = $("<input>").attr("id", "newPagesInput").hide();
    const saveNewBook = $("<button>").text("Save").attr("id", "saveNewButton").on("click", (e) => {
        Evnts.saveNewBook()
    }).hide();
    const cancelNewBook = $("<button>").text("Cancel").attr("id", "cancelNewButton").on("click", (e) => {
        Evnts.cancelNewBook()
    }).hide();
    return header.append(headerTitle).append(addNewBookButton).append(newTitle).append(newSummary).append(newPages).append(saveNewBook).append(cancelNewBook);
}

const buildBody = (booksArr) => {
    const body = $("<div>").attr("id", "bodyDiv");
    booksArr.forEach(book => {
        body.append(buildBookCard(book));
    });
    return body;
}

const buildFooter = () => {
    const footer = $("<div>").attr("id", "footerDiv");
    const footerTitle = $("<h2>").text("Some stuff in the footer");
    return footer.append(footerTitle);
}

const dom = {
    buildDom: (booksArr) => {
        const header = buildHeader();
        const body = buildBody(booksArr);
        const footer = buildFooter();
        $("#target-container").append(header).append(body).append(footer);
    }
}

module.exports = dom;