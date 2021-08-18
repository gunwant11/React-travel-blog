import { Fragment } from "react";
import classes from "./Button.module.scss"

const Button = (props)=>{
    styles = classes.btn + " " +props.className;
    return<Fragment>
        <button className={styles} type={props.type} >{props.text}</button>
    </Fragment>
};
export default Button;