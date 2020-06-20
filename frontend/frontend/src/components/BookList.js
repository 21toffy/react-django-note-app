import React from 'react';


class BookList extends React.Component{
    render(){
        const books = this.props.books.map(book => (
            <EditableBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            onDeleteClick={this.props.onDeleteClick}
            onUpdateClick={this.props.onUpdateClick}></EditableBook>
        ));
        return(
            <div>
                {books}
            </div>
        )
      }
}

class EditableBook extends React.Component{
    state = {
        inEditMode:false
    };

    enterEditMode = () =>{
        this.state( {inEditMode:true});
    }

    leaveEditMode = () =>{
        this.state({inEditMode:false});
    }
    handleUpdate = (book) => {
        this.leaveEditMode()
        book.id === this.props.id;
        this.props.onUpdateClick(book);
    }

    render() {
                const component = () => {
                if(this.state.inEditMode) {
                    return (
                    <BookForm
                        id={this.props.id}
                        title={this.props.title}
                        author={this.props.author}
                        description={this.props.description}
                        onCancelClick={this.leaveEditMode}
                        onFormSubmit={this.handleUpdate}
                    />
                    );
                }
                return (
                    <Book
                    title={this.props.title}
                    author={this.props.author}
                    description={this.props.description}
                    onEditClick={this.enterEditMode}
                    onDeleteClick={this.handleDelete}
                    />
                )
                }
                return (
                <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
                    {component()}
                </div>
                )
            }
            }

        
}