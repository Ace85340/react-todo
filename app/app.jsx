/*
*   NPM Modules
*/
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/*
*   Custom Components
*/
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState())
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={TodoApp}>

        </Route>
    </Router>,
    document.getElementById('app')
);
