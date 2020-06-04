import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


class CustomForm extends React.Component{
    handleFormSubmit = (event) =>{
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
        console.log('dvbj')

    }


   render(){
       return (
         <div>
           <Form onSubmit={this.handleFormSubmit}>

             <FormItem label="Title">
               <Input name = "title" placeholder="Enter your title here" />
             </FormItem>

             <FormItem label="Body">
               <Input name = "content" placeholder="input Body ...." />
             </FormItem>

             <FormItem >
               <Button type="primary" htmlType = "submit" >Post</Button>
             </FormItem>

           </Form>
         </div>
       );
       
   } 
}

export default CustomForm;

