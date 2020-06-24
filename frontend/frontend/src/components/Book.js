import React from 'react';


class Book extends React.Component{
    render(){
        return(
            <div className="card">

        <div className="card-header d-flex justify-content-between">

          <span>
            <strong>Title: </strong>{this.props.title}
          </span>
          

          <div>
            <span onClick={this.props.onEditClick} className="mr-2"><i class="fa fa-edit fa-lg" style={{color:"#2196F3"}}></i></span>
            <span onClick={this.props.onDeleteClick}><i class="fa fa-trash fa-lg" style={{color:"#2196F3"}}></i></span>
          </div>

        </div>

        <div className="card-body">
          {this.props.description}
        </div>


        <div className="card-footer">
          <strong>Author:</strong>  {this.props.author}
        </div>

      </div>

        );
    }
}

export default Book;
