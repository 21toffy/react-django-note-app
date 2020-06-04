import React from 'react';
import axios from 'axios';
import {Card} from 'antd';





class ArticleDetail extends React.Component {
    state = {
        article: {}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
         
        axios.get(`http://127.0.0.1:8000/blog/${articleID}`)
        .then(res =>{
            this.setState({
                article :res.data
            })
        })
    }
    render() {
        return (
            <Card title = {this.state.article.title}>
                <p>{this.state.article.content}</p>
                <small><br></br><b>{this.state.article.timestamp}</b></small>
            </Card>
        )
    }
}

export default ArticleDetail;