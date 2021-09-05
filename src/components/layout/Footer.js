import Emoji from "../UI/Emoji"
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={classes.footer} id="contact">
            Made with <Emoji symbol="❤">  </Emoji>  and  {`</>`}
        </div>
    )
}

export default Footer
