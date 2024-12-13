function fetchBooks() {
// Fetch data from the Game of Thrones API and return the fetch promise
return fetch('https://anapioficeandfire.com/api/books')
.then(response => response.json()) // convert response to JSON
.then(books => renderBooks(books)) // Pass the JSON data to renderBooks
.catch(error => console.error('Error fetching books:', error)); // Handle potential errors
  
}

function renderBooks(books) {
  const main = document.querySelector('main'); //selects the main element
  books.forEach(book => {
    const h2 = document.createElement('h2'); //creates a <h2> element
    h2.innerHTML = book.name; //sets inner HTML to the book's name
    main.appendChild(h2); //appends <h2> to the <main> element
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();// Call fetchBooks when the DOM content is loaded
});
