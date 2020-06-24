import React from 'react';
import BookList from '../components/BookList';
import ToggleableBookForm from '../components/TogleBook';


class BookDashboard extends React.Component{
    state = {
        books:[]
    }
    componentDidMount() {
        fetch('http://localhost:8000/books/')
            .then(response => response.json())
            .then(data => {
               this.setState({books: data});
            });
    }

    createNewBook = (book) =>{
        fetch(`http://localhost:8000/books/`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
        }).then(response => response.json())
        // book.id = Math.floor(Math.random() * 1000);
        this.setState({book:this.state.books.concat([book])});
    }

    updateBook = (newBook) => {
        fetch(`http://localhost:8000/books/${newBook.id}/`, {
        method: 'PUT',
        headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
        }).then(response => response.json())

        const newBooks = this.state.books.map(book =>{
            if (book.id ===newBook.id){
                return Object.assign({}, newBook)
            } else {
                return book;
            }
        });
        this.setState({books: newBooks});
    }

    deleteBook = (bookId) =>{
        fetch(`http://localhost:8000/books/${bookId.id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        this.setState({books:this.state.books.filter(book => book.id !== bookId)})
    }
    render(){
        return (
            <main className="d-flex justify-content-center my-4">
              <div  className="col-5">
                  <BookList
                      books={this.state.books}
                      onDeleteClick={this.deleteBook}
                      onUpdateClick={this.updateBook}
                  ></BookList>
                  <ToggleableBookForm
                      onBookCreate={this.createNewBook}
                  ></ToggleableBookForm>
              </div>
          </main>
        )
    }

}

export default BookDashboard;