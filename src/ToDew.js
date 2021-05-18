import React, { Component } from 'react';
import './ToDew.css';

class ToDew extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            isEditing:false,
            task:this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.makeEdit = this.makeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.strike = this.strike.bind(this);
    }
    handleRemove(){
        this.props.delete(this.props.id)
    }
    toggleEdit(){
        this.setState({isEditing:!this.state.isEditing})
    }
    makeEdit(evt){
       this.props.update(this.props.id,this.state.task);
       this.setState({isEditing:false})
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    strike(){
        this.props.strikeThru(this.props.id)
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form 
                    className="Todo-form" 
                    onSubmit={this.makeEdit}>
                        <input 
                        type="text" 
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChange} >   
                        </input>
                        <button>Save</button>
                    </form>
                </div>
            )
        }else{
            result =(
                <div className="Todo">
                <li 
                className={this.props.completed ? 'Todo-task completed': 'Todo-task'}
                onClick={this.strike}>
                    {this.props.task}
                </li>
                <div className="Todo-buttons">
                <button onClick={this.toggleEdit}><i className="fas fa-pen"></i></button>
                <button onClick={this.handleRemove}><i className="fas fa-trash"></i></button>

                </div>
            </div>
            )
        }
        return (
            result
        )
    }
}



export default ToDew;
