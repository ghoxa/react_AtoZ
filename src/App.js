import { Component } from "react";
import React from "react";
import "./App.css";
// @flow

export default class App extends Component{
  state = {
    todoData : [
    //   {
    //   id:"1",
    //   title:"공부하기",
    //   completed:true
    // },
    // {
    //   id:"2",
    //   title:"청소하기",
    //   completed:false
    // },
    // {
    //   id:"3",
    //   title:"밥먹기",
    //   completed:false
    // },
  
    ],
    value: ""
    
  }
  btnStyle = {
  color: "white",
  boreder: "none",
  padding: "5px 9px",
  borederRadius: "50%",
  cursor: "pointer",
  float: "right",
  }

  getStyle = (completed) => {
    return {
     padding: "10px",
     borderBottom: "1px #ccc dotted",
     textDecoration:completed ?'line-through' : 'none' 
    };
  }

 

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
    this.setState({todoData: newTodoData});
  }

  handleChange = (e) => {
  console.log('e', e.target.value);
  this.setState({value: e.target.value}); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo={
      id:Date.now(),
      title:this.state.value,
      completed:false
    }
    this.setState({todoData: [...this.state.todoData, newTodo], value:""});
  } //...이미 위에 기술된 tododata임 

 
  handleCompleteChange = (id) => {
  let newTodoData = this.state.todoData.map((data) => {
    if(data.id === id){
      data.completed = !data.completed;
    }
    return data;
  });
  this.setState({todoData: newTodoData});
  }
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title"><h1>할 일 목록</h1></div>



          {this.state.todoData.map((data) => {
            return (
              <div key={data.id} style={this.getStyle(data.completed)}>
                <input type="checkbox" defaultChecked={false} onChange={()=> this.handleCompleteChange(data.id)} />
                {data.title}
                <button style={this.btnStyle} onClick={()=> this.handleClick(data.id)}>x</button>
              </div>
            );
          })}
        <form style={{display:"flex"}} onSubmit={this.handleSubmit} >
          <input type="text" name="value" style={{flex:'10',padding:"5px"}} placeholder="해야 할 일을 입력하세요." value={this.state.value} onChange={this.handleChange}></input>
        
        <input type="submit" value="입력" className="btn" style={{flex:'1'}}></input>
        </form>



         </div>
         </div>
    );
  };
};