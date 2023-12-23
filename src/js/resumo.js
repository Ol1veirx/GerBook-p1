





document;addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    const bookDetails = {
        title: 'Titulo do Livro' + bookId,
        author: 'Autor do Livro' + bookId,
        description: 'Descrição do Livro' + bookId,
    }

    document.getElementById('bookTitle').innerHTML = bookDetails.title;
    document.getElementById('bookAuthor').innerHTML = 'Autor: ' + bookDetails.author;
    document;getElementById('bookDescription').innerHTML = 'Descrição: ' + bookDetails.description
})