import React, { Component } from 'react';
import ToDew from './ToDew';
import ToDewForm from './ToDewForm';
import './TodoList.css'

export default class DewitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
             todoList: []
        }
        this.createToDo = this.createToDo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);this.makeUpdate = this.makeUpdate.bind(this);
        this.taskCompleted = this.taskCompleted.bind(this);
    }
    createToDo(newToDo){
        this.setState({todoList:[...this.state.todoList,newToDo]})
    }
    makeUpdate(id,update){
        const updatedChore = this.state.todoList.map(todo=>{
            if(todo.id === id){
                return{...todo,task:update};
            }
            return todo;
        })
        this.setState({todoList:updatedChore})
    }
    deleteTodo(id){
        this.setState({
            todoList:this.state.todoList.filter(todo=>
                todo.id !== id
            )
        })
    }
    taskCompleted(id){
        const itemCompleted = this.state.todoList.map(todo=>{
            if(todo.id === id){
                return{...todo,completed:!todo.completed};
            }
            return todo;
        })
        this.setState({todoList:itemCompleted})
    }
    render() {
        const list = this.state.todoList.map(singleTodo=>{
            console.log(singleTodo.task)
           return <ToDew 
           delete={this.deleteTodo} 
           task={singleTodo.task} 
           key={singleTodo.id}
           update={this.makeUpdate} 
           id={singleTodo.id}
           completed={singleTodo.completed}
           strikeThru ={this.taskCompleted}
           >
           </ToDew>
        })
        return (
            <div className="TodoList">
                <h1>HoneyDew App<span>Your Honey's To Do List</span></h1>
                <ul>{list}</ul>
                <ToDewForm addItem={this.createToDo}></ToDewForm>
            </div>
        )
    }
}
