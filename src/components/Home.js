//Basics covered: props, prope.children, state

import React  from 'react';
import PropTypes from 'prop-types';


export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.user.age,
            status: 100
        };
    }

    click() {
        this.setState({
            age: this.state.age + 2
        });
    }
     
    render() {
        return (
            <div>
                <p>
                    Hi {this.props.user.name}
                    Your age is {this.state.age}
                    <br />
                    Status: {this.state.status}
                </p>
                <hr />
                <button className='btn' onClick={this.click.bind(this)}>Click Me!</button>

            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
};