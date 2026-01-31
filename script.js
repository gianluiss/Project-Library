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

addBookToLibrary("Harry Potter", "J.K. Rowling", "Fantasy", false);
addBookToLibrary("Jujutsu Kaisen", "Gege Akutami", "Action", true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", true);
addBookToLibrary("One Piece", "Eiichiro Oda", "Adventure", false);
addBookToLibrary("Dune", "Frank Herbert", "Sci-Fi", true);
addBookToLibrary("Naruto", "Masashi Kishimoto", "Action", true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Classic", false);
addBookToLibrary("Attack on Titan", "Hajime Isayama", "Action", true);
addBookToLibrary("Bleach", "Tite Kubo", "Action", true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", true);
addBookToLibrary("Chainsaw Man", "Tatsuki Fujimoto", "Action", false);
addBookToLibrary("1984", "George Orwell", "Dystopian", true);
addBookToLibrary("Death Note", "Tsugumi Ohba", "Mystery", true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Classic", false);
addBookToLibrary("My Hero Academia", "Kohei Horikoshi", "Action", true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", false);
addBookToLibrary("Black Clover", "Yūki Tabata", "Fantasy", true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Classic", false);
addBookToLibrary("Dragon Ball", "Akira Toriyama", "Action", true);
addBookToLibrary("The Alchemist", "Paulo Coelho", "Adventure", true);
addBookToLibrary("One Punch Man", "ONE", "Action", true);
addBookToLibrary("Frankenstein", "Mary Shelley", "Horror", false);
addBookToLibrary("Fullmetal Alchemist", "Hiromu Arakawa", "Adventure", true);
addBookToLibrary("The Hunger Games", "Suzanne Collins", "Dystopian", false);


//console.log(myLibrary);

function displayBook() {
    myLibrary.forEach( (book) => {
        console.log(`ID: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nGenre: ${book.genre}\nisRead: ${book.isRead}\n==========================`);
    });
}

//displayBook();

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

        title.textContent = book.title;
        author.textContent = book.author;
        genre.textContent = book.genre;

        const cardActionWrapper = document.createElement('div');
        cardActionWrapper.classList.add("card-action-wrapper");

        const statusBtn = document.createElement('button');
        if(book.isRead) {
            statusBtn.classList.add("green-btn");
            statusBtn.classList.add("finished");
            statusBtn.textContent = "Finished";
        }
        else {
            statusBtn.classList.add("red-btn");
            statusBtn.classList.add("unfinished");
            statusBtn.textContent = "Unfinished";
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete");
        deleteBtn.classList.add("red-btn");
        deleteBtn.textContent = "Delete";

        cardActionWrapper.appendChild(statusBtn);
        cardActionWrapper.appendChild(deleteBtn);

        cardDiv.id = book.id;
        cardDiv.appendChild(title);
        cardDiv.appendChild(author);
        cardDiv.appendChild(genre);
        cardDiv.appendChild(cardActionWrapper);

        cardGrid.appendChild(cardDiv);
    });
};


/* addCard() add cards one by one */

function addCard() {
    const book = myLibrary[myLibrary.length - 1];

    const cardDiv = document.createElement('div');
    cardDiv.className = "card";

    const title = document.createElement('h2');
    const author = document.createElement('p');
    const genre = document.createElement('p');

    title.textContent = book.title;
    author.textContent = book.author;
    genre.textContent = book.genre;

    const cardActionWrapper = document.createElement('div');
    cardActionWrapper.classList.add("card-action-wrapper");

    const statusBtn = document.createElement('button');
    if(book.isRead) {
        statusBtn.classList.add("green-btn");
        statusBtn.classList.add("finished");
        statusBtn.textContent = "Finished";
    }
    else {
        statusBtn.classList.add("red-btn");
        statusBtn.classList.add("unfinished");
        statusBtn.textContent = "Unfinished";
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("red-btn");
    deleteBtn.textContent = "Delete";

    cardActionWrapper.appendChild(statusBtn);
    cardActionWrapper.appendChild(deleteBtn);

    cardDiv.id = book.id;
    cardDiv.appendChild(title);
    cardDiv.appendChild(author);
    cardDiv.appendChild(genre);
    cardDiv.appendChild(cardActionWrapper);

    cardGrid.appendChild(cardDiv);
}

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = bookForm.title.value;
    const author = bookForm.author.value;
    const genre = bookForm.genre.value;
    const isRead = bookForm.status.value === "finished" ? true : false;

    addBookToLibrary(title, author, genre, isRead);
    bookForm.reset();
    dialog.close();

    addCard();
});


cardGrid.addEventListener('click', (e) => {
    if(!e.target.classList.contains("delete")) {
        return;
    }
    const card = e.target.closest(".card");

    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].id === card.id) {
            myLibrary.splice(i, 1);
            break;
        }
    }
    //console.log(myLibrary);
    card.remove();
});

cardGrid.addEventListener('click', (e) => {
    if(!e.target.classList.contains("finished") && !e.target.classList.contains("unfinished")) {
        return;
    }
    const card = e.target.closest(".card");

    let isRead = null;
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].id === card.id) {
            myLibrary[i].isRead = !myLibrary[i].isRead;
            isRead = myLibrary[i].isRead;
            break;
        }
    }

    if(isRead) {
        e.target.classList.remove("unfinished");
        e.target.classList.remove("red-btn");

        e.target.classList.add("finished");
        e.target.classList.add("green-btn");
        e.target.textContent = "Finished"
    }
    else {
        e.target.classList.remove("finished");
        e.target.classList.remove("green-btn");

        e.target.classList.add("unfinished");
        e.target.classList.add("red-btn");
        e.target.textContent = "Unfinished"
    }

    //console.log(myLibrary);
});


generateCards();