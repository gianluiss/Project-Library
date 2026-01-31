const addBookBtn = document.querySelector(".add-book-btn");
const dialog = document.querySelector("dialog");
const bookForm = document.querySelector("#bookForm");
const closeBtn = document.querySelector(".close-btn");
const cardGrid = document.querySelector(".card-grid");

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

dialog.addEventListener("close", () => {
    bookForm.reset();
});

function generateCards() { //generate all cards in myLibrary
    myLibrary.forEach(book => {
        const cardDiv = document.createElement('div');
        cardDiv.className = "card";

        const title = document.createElement('h2');
        const author = document.createElement('p');
        const genre = document.createElement('p');
        //state-wrapper

        title.textContent = book.title;
        author.textContent = book.author;
        genre.textContent = book.genre;

        //const cardActionWrapper = document.createElement('div');

        cardDiv.appendChild(title);
        cardDiv.appendChild(author);
        cardDiv.appendChild(genre);

        cardGrid.appendChild(cardDiv);
    });
};

generateCards();

/* addCard() add cards one by one

*/

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = bookForm.title.value;
    const author = bookForm.author.value;
    const genre = bookForm.genre.value;

    addBookToLibrary(title, author, genre);
    bookForm.reset();
    dialog.close();

   // console.log(myLibrary);
});