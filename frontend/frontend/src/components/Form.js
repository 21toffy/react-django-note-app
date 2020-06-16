import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
const FormItem = Form.Item;
// 







class CustomForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.logo(title, content);
  }
  change = e => {
            this.setState({
              [e.target.name]: e.target.value
            });
            console.log(e.target.value);
            // alert(e.target.value);
          }

  

    render(){
      return (
        <div>
    
    
          <Form
            onSubmit={this.handleFormSubmit}
          >
            <Form.Item label="Title">
              <Input onChange={this.change} name="title" placeholder="title here" />
            </Form.Item>
            <Form.Item label="content">
              <Input onChange={this.change} name="content" placeholder="some content here" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
               submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  
};







  

// const CustomForm = props => {
//   const handleFormSubmit = (event, requestType, articleID) => {
//     event.preventDefault();
//     const title = event.target.elements.title.value;
//     const content = event.target.elements.content.value;
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: props.token
//     };

//     let data = {
//       title: title,
//       content: content
//     };

//     switch (requestType) {
//       case "post":
//         return axios
//           .post("http://127.0.0.1:8000/blog/", data)
//           .then(response => {
//             console.log(response.data);
//           })
//           .catch(err => console.error(err));

//       case "put":
//         return axios
//           .put(`http://127.0.0.1:8000/blog/${articleID}/`, data)
//           .then(response => {
//             console.log(response.data);
//           })
//           .catch(err => console.error(err));

//       default:
//         break;
//     }
//   };
//   return (
//     <div>


//       <Form
//         onSubmit={event =>
//           handleFormSubmit(event, props.requestType, props.articleID)
//         }
//       >
//         <Form.Item label="Title">
//           <Input name="title" placeholder="title here" />
//         </Form.Item>
//         <Form.Item label="content">
//           <Input name="content" placeholder="some content here" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             {props.btnText}
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };


// class CustomForm extends React.Component {
//   constructor(props){
//     super(props);
    
//     this.state = {
//       title:'',
//       content:''
//     };
//     this.change = this.change.bind(this);
//     this.submit = this.submit.bind(this);
//   }

//   submit(e){
//     e.preventDefault();
//     axios.post("http://127.0.0.1:8000/blog/", {
//       title:this.state.title,
//       content:this.state.content
//     }).then(response => {console.log(response.this.state);}).catch(err => console.error(err));
//       }

//       change = e => {
//         this.setState({
//           [e.target.name]: e.target.value
//         });
//         console.log(e.target.value);
//         // alert(e.target.value);
//       }
  
  


// render(){
//   return(
//     <div>
//       <form onSubmit = {e => this.submit}>
//         <label>title</label><input type= 'text' name = "title" onChange ={e =>this.change(e)} value = {this.state.title}/>

//         <label>content</label><input type= 'text' name = "content" onChange ={e =>this.change(e)} value = {this.state.content}/>

//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );  
// }}


// class CustomForm extends React.Component {
  //   constructor(props){
  //         super(props);
          
  //         this.state = {
  //          titleContent: {
  //           id:'',
  //           title:'',
  //           content:''
  //          }
  //         };
  //         this.submit = this.submit.bind(this);
  //       }
     
  //     componentDidMount() {
  //       if (this.props.data) {
  //         const { title, content } = this.props.data;
  //         this.setState({ title, content });
  //       }
  //       this.refreshList();
  //     }
  
  //     refreshList = ()=>{
  //       axios.get('http://127.0.0.1:8000/blog/')
  //       .then(res =>{
  //           this.setState({
  //             titleContent:res.data
  //           })
  //       })
  //   }
      
  
  //   submit = (e, requestType) => {
  //     var requestType = 'Post';
      
  //     axios.post("http://127.0.0.1:8000/blog/", this.state).then(res => this.state).catch(err => console.error(err));
  // };
  //       change = e => {
  //         this.setState({
  //           [e.target.name]: e.target.value
  //         });
  //         console.log(e.target.value);
  //         // alert(e.target.value);
  //       }
  
  //       defaultIfEmpty = value => {
  //         return value === "" ? "" : value;
  //       };
  //       editItem = (e, requestType, articleID) => {
  //         var requestType = 'Put';
  //         e.preventDefault();
  //         axios.put(`http://127.0.0.1:8000/blog/`+this.state.titleContent.id, this.state).then(response => {console.log(response.data);}).catch(err => console.error(err));
  //         console.log(this.state.titleContent.id);
  //       };
  
  // render(){
  //   return(
  //     <div>
  //       <form onSubmit = {this.editItem}>
  //         <label>title</label><input type= 'text' name = "title" onChange ={this.change} value = {this.state.title}/>
  
  //         <label>content</label><input type= 'text' name = "content" onChange ={e =>this.change(e)} value = {this.state.content}/>
  
  //         <button type="submit">submit</button>
  //       </form>
  //     </div>
  //   );  
  // }}
  

export default CustomForm;
// export default Login;

