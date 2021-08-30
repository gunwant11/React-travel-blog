import classes from "./Panel.module.scss"
import panel1 from "../../assets/panel/panel1.jpg"
import panel2 from "../../assets/panel/panel2.jpg"
import panel3 from "../../assets/panel/panel3.jpg"
import panel4 from "../../assets/panel/panel4.jpg"
import { useState } from "react"



const Panel = () => {

    const [AssentBg, setAssentBg] = useState(false);
    

    return (
        <div className={classes.box} >
            <div><p><img src={panel1}  alt="" /></p> </div>
            <div><p><img src={panel2} alt="" /></p> </div>
            <div><p><img src={panel3} alt="" /></p> </div>
            <div><p><img src={panel4} alt="" /></p> </div>
        </div>
    )
}

export default Panel
