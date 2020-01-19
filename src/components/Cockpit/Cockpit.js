import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const stil = [];
    let btnStyle = '';
    if (props.showPersons){
        btnStyle = classes.Red
    }
        if (props.persons.length <= 2) {
            stil.push(classes.red)
        }
    if (props.persons.length <= 1) {
        stil.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit} >
            <h1> I'm sexy and I know it!!!</h1>
            <p className={stil.join(' ')}>This is working</p>
            <button
                className={btnStyle}
                onClick={props.clicked}>Swith names</button>
        </div>
    )

}

export default cockpit;