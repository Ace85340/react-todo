/*
*   NPM Modules
*/
var React = require('react');
/*
*   Custom Components
*/



// var Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <p>Boilerplate 3</p>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>

    );
}

module.exports = Main;
