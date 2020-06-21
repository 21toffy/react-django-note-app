import React from 'react';

class BookForm extends React.Component{
    state = {
        title:this.props.title || '',
        author: this.props.author || '',
        description: this.props.description || ''
    }
    handleFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit({...this.state});
    }
    handleTileUpdate = (event)=>{
        this.setState({title:event.target.value});
    }
    handleAutorUpdate = (event) =>{
        this.setState({autor:event.target.value});
    }
    handleDescriptionUpdate  = (event) =>{
        this.setState({description:event.target.value});
    }

    render(){
        const buttonText = this.props.id ? 'Update Book': 'Create Book';
        return(
            <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>
            Title
          </label>
          <input type="text" placeholder="Enter a title"
            value={this.state.title} onChange={this.handleTitleUpdate}
            className="form-control"/>
        </div>
        <div className="form-group">
          <label>
            Author
          </label>
          
          <input type="text" placeholder="Author's name"
            value={this.state.author} onChange={this.handleAuthorUpdate}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>
            Description
          </label>
          <textarea className="form-control" placeholder="Book Description"
            rows="5" value={this.state.description}
            onChange={this.handleDescriptionUpdate}
          >
            {this.state.description}
          </textarea>
        </div>
        <div className="form-group d-flex justify-content-between">
          <button type="submit" className="btn btn-md btn-primary">
            {buttonText}
          </button>
          <button type="button" className="btn btn-md btn-secondary" onClick={this.props.onCancelClick}>
            Cancel
          </button>
        </div>
      </form>
        )
    }
}




export default BookForm;

