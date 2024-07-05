import { Component } from 'react';
import './TodosForm.css';

class TodosForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '聚会'
        }
    }

    handleChange = (e)  => {
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.inputText.trim()) {
            this.props.addTodo(this.state.inputText)
            this.setState({
                inputText: ''
            })
        }

    }

    render () {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="请输入待办事项"
                    className="todo-form__input"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                />
                <button type="submit" className="todo-form__button">Add</button>
            </form>
        );
    }
}

export default TodosForm;