import React, { Component } from 'react';

class TodoList extends Component{
    constructor() {
        super();
        this.state = {
            userInput : '',
            items : []
        }
    }

    onChange(evt) {
        this.setState({
            userInput : evt.target.value
        });
    }

    addTodo (evt) {
        evt.preventDefault();
        this.setState({
            userInput : '',
            items : [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo (item) {
       
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            item : array
        });
    }

    renderTodos () {
        return this.state.items.map((item) => {
            return (
            <div className='list-group-item' key={item}>
                {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
            </div>);
        })
    }

    render() {
        return(
            <div>
                <h1 align='center'>Ma TodoList</h1>
                <form className = 'form-raw align-items-center'>
                    <input 
                        className = 'form-control mb-2'
                        value={this.state.userInput} 
                        type='text' 
                        placeholder='Renseignez un item'
                        onChange = {this.onChange.bind(this)}
                    />
                    <button 
                        className = 'btn btn-primary'
                        onClick = {this.addTodo.bind(this)}>
                        Ajouter
                    </button>
                </form>

                <div className='list-group'>
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;