var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.props.onAddTodo(todoText);
            this.refs.todoText.value = '';
        } else {
            this.refs.todoText.focus();
        };
    },
    render: function() {
        return (
            <div>
                <form ref="addTodoForm" onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="Enter your Todo text"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
