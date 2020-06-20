import React from 'react';
import BookList from '../components/BookList';


class BookDashboard extends React.Component{
    state = {
        books:[
            {
            id: 1,
            title: 'A simple book',
            author: 'Jude Ben',
            description: `Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud`
            },

            {
            id: 2,
            title: 'A book of secrets',
            author: 'James John',
            description: `Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque otam rem iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.` }
            ]
    }
    createNewBook = (book) =>{
        book.id = Math.floor(Math.random() * 1000);
        this.setState({book:this.state.books.concat([book])});
    }

    updateBook = (newBook) => {
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