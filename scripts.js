const libraryList = document.querySelector('#library-list');
let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function viewLibrary() {
  //libraryList.textContent = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const entryRow = document.createElement('tr');
    entryRow.classList.add('library-entry');
    libraryList.appendChild(entryRow);

    //Title
    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[i].title;
    entryRow.appendChild(bookTitle);

    //Author
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[i].author;
    entryRow.appendChild(bookAuthor);

    //Pages
    const bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[i].pages;
    entryRow.appendChild(bookPages);

    //Read
    const bookRead = document.createElement('td');
    bookRead.
  }
}

function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  viewLibrary();
  //console.log(myLibrary);
  
}


//viewLibrary();
addBookToLibrary('Jane Eyre', 'Charlotte Bronte', '532', 'read');

