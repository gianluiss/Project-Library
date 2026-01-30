const myLibrary = [];

function Book() {
    // the constructor...
    if(!new.target) {
        throw Error("Use 'new' keyword to call constructor");
    }

    this.id = crypto.randomUUID();
}

/*
author, title, number of pages, whether it’s been read and anything else you might want.
*/

function addBookToLibrary() {
    // take params, create a book then store it in the array
}

/*
const book1 = new Book();
console.log(book1.id);

const book2 = new Book();
console.log(book2.id);
*/