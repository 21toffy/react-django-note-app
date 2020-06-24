import React from 'react';

import BookForm from './BookForm';





class ToggleableBookForm extends React.Component{
    state = {
        inCreateMode:false
    }

    handleCreateClick = () =>{
        this.setState({inCreateMode:true});
    }
    leaveCreateMode = () =>{
        this.setState({inCreateMode:false});
    }
    handleCancelClick = (event) =>{
        this.leaveCreateMode();
    }
    handleFormSubmit = (book) =>{
        this.leaveCreateMode();
        this.props.onBookCreate(book);
    }
    render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
          <BookForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}></BookForm>
        </div>
      )
    }
    return (
      <button onClick={this.handleCreateClick} className="btn btn-secondary">
        <i className="fa fa-plus"></i>
      </button>
    );
  }
}

export default ToggleableBookForm;