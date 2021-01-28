import React, { Component } from 'react';
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => {
        return (
            this.props.todos.map((todo, i) => {
                return <Todo key={i} text={todo} />
            })
        )
    }

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    }
}

const maptStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(maptStateToProps)(TodosContainer);
