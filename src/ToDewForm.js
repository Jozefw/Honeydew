import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewForm.css';

export default class ToDewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        evt.preventDefault();
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem({...this.state,id:uuidv4(),completed:false});
        this.setState({task:""})
    }
    render() {
        return (
            <form className='NewForm'
            onSubmit={this.handleSubmit}>
                <label htmlFor="newTask">Add Task: </label>
                <input 
                type="text" 
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
                id="newTask"
                ></input>
                <button>Save To List</button>
            </form>
        )
    }
}
