import GradientMenuBar from "../../GradientMenuBar";
import homeTopicsImage from "../../Images/home-topics.png"
import Logo from "../../Logo";
import { Button } from "@mui/material";
const HomeTopics = () => {
    return(
        <>
            <div className="home-topic-banner">
                <Logo logoGroup={"topic-logo-group"} logoImg={"topic-logo-img"} logoTxt={"topic-logo-text"}/>
                <h1 className="topics-header">lOREM iPSUM DOLOR SIT </h1>
                <div className="topics-button">
                <Button size="large"
                style={{backgroundColor: "#55C6D7", color:"#0E1724", textTransform: "uppercase", letterSpacing: "0.03em",
                        size:"16px", fontWeight:"600", lineHeight:"26px", alignItems: "center", textAlign: "center",
                        width:"33%", paddingTop: "1.35rem", paddingBottom: "1.35rem",  }} 
                        disableFocusRipple disableElevation>
                    BEGIN
                </Button>
                </div>
            </div>
            <GradientMenuBar/>
            <div className='home-topics-container'>
                <img src={homeTopicsImage} alt="home topics background" className="home-topics-image"/>
            </div>
        </>
    )
}

export default HomeTopics;