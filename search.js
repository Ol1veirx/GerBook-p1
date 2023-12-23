const searchBtn = document.getElementById('searchButton')


searchBtn.addEventListener("click", () => {
    const apiKey = "AIzaSyDKQRvIdNUd-ij3ROLGMatxKYhEpTGfTDQ";
    const searchQuery = document.getElementById('searchInput').value
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.items))
        .catch(error => console.error('Erro', error))
})

function displayResults(books){
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    books.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
        // const bookId = book.id;

        const bookHTML = `
            <div class="book-container">
                <h2>${title}</h2>
                <p>Autores: ${authors}</p>
                <img src="${thumbnail}" alt="${title}">
            </div> 
        `;

        resultsContainer.innerHTML += bookHTML
    })
}