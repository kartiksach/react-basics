//Basics covered: props, prope.children, state
//Passing references from parent to child using props

import React  from 'react';
import PropTypes from 'prop-types';


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.user.age,
            status: 100,
            homeLink: props.initialLinkName
        };
    }

    makeMeOld() {
        this.setState({
            age: this.state.age + 1
        });
        console.log(this.state.age + 1);
    }

    changeStatus() {
        this.setState({
            status: 404
        });
    }

    changeName() {
        this.props.changeLink(this.state.homeLink);
    }

    changeHandler(e) {
        this.setState({
            homeLink: e.target.value
        });
    }
     
    render() {
        return (
            <div>
                <p>
                    Hi {this.props.user.name}
                    <br /><br />
                    Your age is {this.state.age}
                    <br /><br />
                    Status: {this.state.status} 
                    <hr />
                    <button onClick={this.makeMeOld.bind(this)}>Make Me Older!</button>
                    <hr />
                    <button onClick={this.changeStatus.bind(this)}>Change Status</button>
                    <hr />
                    Enter your new link Name: 
                    <input 
                        type='text' 
                        value={this.state.homeLink}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <button onClick={this.changeName.bind(this)}>Change Home Link!</button>
                </p>
                <hr />
            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
};