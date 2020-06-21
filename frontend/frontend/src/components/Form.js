import React from "react";
import { Form, Input, button } from "antd";
import axios from "axios";
// import renderEmpty from "antd/lib/config-provider/renderEmpty";
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
const FormItem = Form.Item;
//

class CustomForm extends React.Component {
  state = {
    title: "",
    content: "",
  };

  handleFormSubmit = (event, requestType, articleID) => {
    // event.preventDefault();
    const title = this.state.title;
    const content = this.state.content;
    console.log(title, content);
    switch (requestType) {

            case "post":
              return axios
                .post("http://127.0.0.1:8000/blog/", {title:title, content:content})
                .then(res =>{
                  this.setState({
                      article :res.data
                  })
              })
                .catch(err => console.error(err));
      
            case "put":
              return axios
                .put(`http://127.0.0.1:8000/blog/${articleID}/`, {title:title, content:content})
                .then(response => {
                  console.log(response);
                })
                .catch(err => console.error(err));
      
            default:
              break;
          }
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form  onFinish={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
          <FormItem label="Title">
            <Input
              onChange={this.change}
              name="title"
              placeholder="title here"
            />
          </FormItem>
          <FormItem label="content">
            <Input
              onChange={this.change}
              name="content"
              placeholder="some content here"
            />
          </FormItem>
          <FormItem>
            <button  htmlType="submit" type="submit">{this.props.btnText}</button>
          </FormItem>
        </Form>
       </div>
    );
  }
}
export default CustomForm;

