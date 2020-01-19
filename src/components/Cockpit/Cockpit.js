import React,{useEffect,useRef} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {
   const toggleBtnRef = useRef(null);

    useEffect(()=>{
        toggleBtnRef.current.click();
       return()=>{
           console.log('jsn')
       }
    },[]);
    const stil = [];
    let btnStyle = '';
    if (props.showPersons) {
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
            <h1>{props.title}</h1>
            <p className={stil.join(' ')}>This is working</p>
            <button
            ref={toggleBtnRef}
                className={btnStyle}
                onClick={props.clicked}>Swith names</button>
        </div>
    )

}

export default Cockpit;