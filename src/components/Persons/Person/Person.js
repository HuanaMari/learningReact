import React, { Component } from 'react'
import style from './Person.module.css'
import Aux from '../../../hoc/Auxilery'
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    };
    componentDidMount() {
        this.inputElementRef.current.focus();
    };
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and {this.props.age} years old
                </p>
                <p> {this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}></input>
            </Aux>
        )
    }
};

export default withClass(Person, style.Person)