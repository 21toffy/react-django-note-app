import React from 'react';
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from '../components/Form';

import { Card } from 'antd';




class ArticleList extends React.Component {
    state = {
        articles: []
    }

    componentDidMount(){
        this.refreshList();
        console.log(this.state.articles);
    }
            refreshList = ()=>{
            axios.get('http://127.0.0.1:8000/blog/')
            .then(res =>{
                this.setState({
                    articles:res.data
                })
                
            })
        }
    render() {
        return (
            <div>
                <Card title ='Create your Notes here'>
                {/* <h4>Create your Notes here</h4> */}
                <CustomForm
                setState={this.props.setState}
                requestType = "post"
                articleID = {null}
                btnText = "Create"
                />
                </Card>
                <br />
                <Articles data = {this.state.articles}/>
            </div>
        )
    }
}

export default ArticleList;





