import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;


const CustomForm = props => {
  const handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: props.token
    };

    let data = {
      title: title,
      content: content
    };

    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/blog/", data)
          .then(response => {
            console.log(response.data);
          })
          .catch(err => console.error(err));

      case "put":
        return axios
          .put(`http://127.0.0.1:8000/blog/${articleID}/`, data)
          .then(response => {
            console.log(response.data);
          })
          .catch(err => console.error(err));

      default:
        break;
    }
  };
  return (
    <div>
      <Form
        onSubmit={event =>
          handleFormSubmit(event, props.requestType, props.articleID)
        }
      >
        <Form.Item label="Title">
          <Input name="title" placeholder="title here" />
        </Form.Item>
        <Form.Item label="content">
          <Input name="content" placeholder="some content here" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {props.btnText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomForm;

