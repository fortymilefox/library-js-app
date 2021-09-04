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
    const readStatus= document.createElement('td');
    const bookRead = document.createElement('button');
    if (myLibrary[i].read === false) {
      bookRead.classList.add('button-small-unread');
      bookRead.textContent = 'Unread'
    } else {
      bookRead.classList.add('button-small');
      bookRead.textContent = 'Read';
    }
    readStatus.appendChild(bookRead);
    entryRow.appendChild(readStatus);

    //Trash
    const bookDelete = document.createElement('td');
    const trashIcon = document.createElement('a');
    trashIcon.innerHTML = '<i class="fas fa-trash"></i>';
    bookDelete.appendChild(trashIcon);
    entryRow.appendChild(bookDelete);
    
  }
}

function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  viewLibrary();
  //console.log(myLibrary);
}

function removeBookFromLibrary() {
  document.addEventListener('click', (event) => {
    const {target} = event;
    const tr = target.parentNode.parentNode.rowIndex - 1;
    if (target.classList.contains("fa-trash")){
      myLibrary.splice(tr,1);
    }
    viewLibrary();
  })
}


//viewLibrary();
addBookToLibrary('Jane Eyre', 'Charlotte Bronte', '532', true);
addBookToLibrary('Braiding Sweetgrass', 'Robin Wall Kimmerer', '391', false);
removeBookFromLibrary();
