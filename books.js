let myLibrary =[];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggleRead = function(){
    this.read =!this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.setAttribute('class','book-card');
        bookEl.innerHTML =` 
        <div class="card-header">
            <h3 class="card-title">${book.title}</h3>
            <h5 class="card-author">By ${book.author}</h5>  
        </div>    
        <div class="card-body">
            <p class="card-pages">${book.pages}</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button type="button" class="remove-btn" onClick="removeBook(${i})">Remove</button>
            <button type="button" class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>

        </div>
    `; 
    
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}



function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
   
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
                                                
}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener('click', function(){
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'block';

});

document.querySelector('#new-book-form').addEventListener("submit",function(event) {
    event.preventDefault();
    addBookToLibrary();
   
})