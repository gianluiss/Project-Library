const addBookBtn = document.querySelector(".add-book-btn");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".close-btn");

const myLibrary = [];

function Book(id, title, author, genre, isRead) {
    // the constructor...
    if(!new.target) {
        throw Error("Use 'new' keyword to call constructor");
    }

    this.id = id;
    this.title = title,
    this.author = author;
    this.genre = genre;
    this.isRead = isRead;
}

/*
author, title, number of pages, whether it’s been read and anything else you might want.
*/

function addBookToLibrary(title, author, genre, isRead) {
    // take params, create a book then store it in the array
    myLibrary.push(new Book(crypto.randomUUID(), title, author, genre, isRead));
}

addBookToLibrary("Harry Potta", "J.K. Rowling", "Fantasy", false);
addBookToLibrary("Jujutsu Kaisen", "Gege Akutami", "Action", true);
console.log(myLibrary);

function displayBook() {
    myLibrary.forEach( (book) => {
        console.log(`ID: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nGenre: ${book.genre}\nisRead: ${book.isRead}\n==========================`);
    });
}

displayBook();

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});