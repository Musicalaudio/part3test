import GlobeImage from "../../Images/globe.png"
import { makeStyles } from "@mui/styles";
import Logo from "../../Logo"
import iconPrompt from "../../Images/icon-prompt.png"
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    globeContainer:{
        background: "#08395B",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
      },
      globeImage:{
        paddingTop: "1.5rem",
        width: "50%",
        height: "50%",
        maxWidth: "50%",
      },
      globePlayer:{
        position: "absolute",
        width: "100%",
        height: "3rem",
        left: "0",
        bottom: "0",
        background: "#C4C4C4",
        opacity: "0.8",
      },
      playerDiv: {
        position: "absolute",
        width: "60%",
        left: "0",
        bottom: "0",
      },
      clickHere:{
        display: "flex",
        alignItems: 'center',
        position: "absolute",
        width: "518px",
        height: "28.64px",
        left: "18.5%",
        top: "70vh",
      },
      clickHereText:{
          paddingLeft: "3rem",
      }
}))

const Globe = () => {
    const classes = useStyles();

    return (  
        <div className={classes.globeContainer}>
            <p className="globe-title">LOREM IPSUM</p>
            <Logo logoGroup={"globe-logo-group"} logoTxt={"globe-logo-text"} logoImg={"globe-logo-img"}/>
            <img src={GlobeImage} alt="Globe" className={classes.globeImage}/>
            <div className={classes.clickHere} >
            
            <img src={iconPrompt} alt="pointing glove icon"/>
            <Link to="">
                <p className={classes.clickHereText}
                    style={{color:"#FFFFFF", fontFamily:"Arial", fontWeight:"700", style:"normal", size:"22px", lineHeight:"33px"}}>
                    Click begin to get started.
                </p>
            </Link>
            </div>
            <div className={classes.globePlayer}>
                <div className={classes.playerDiv}>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
 
export default Globe;