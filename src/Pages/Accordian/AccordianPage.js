import backgroundImage from "../../Images/accordian.jpg"
import AccordianComponent from "./AccordianComponent"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const AccordianPage = () => {
    const [accordianAmount, setAccordianAmount] = useState(7)

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const generateAccordians = () => {
        let accordians = [];
        for(let i=0; i<accordianAmount; i++){
            accordians.push(<AccordianComponent key={`panel${i}`} panelName={`panel${i}`} expanded={expanded} handleChange={handleChange}/>)
        }
        return accordians
    }

    return(
        <div className="accordian-container">
            <div className="accordian-gradient">
                <div className="accordian-main-text">
                        <h1 className="accordian-title">Nulla imperdiet</h1>
                        <p className="accordian-body">Vestibulum dapibus hendrerit nibh ut ornare.</p>
                        <p className="accordian-body accordian-para">Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.</p>
                </div>
            </div>
            <div className="position-accordians">
                {generateAccordians()}
            </div>
            <div className="position-menu">
                <div className="accordian-menu-btn">
                    <div className="accordian-menu-btn__burger"/>
                </div>
            </div>
            <div className="accordian-button-set">
                <div className="accordian-page-buttons accordian-prev-button">
                    <ArrowBackIosNewIcon style={{stroke: "black", strokeWidth: "2"}}/>
                    <p className="prev-button-text">PREV</p>
                </div>
                <div className="accordian-page-buttons accordian-next-button">
                    <ArrowForwardIosIcon fontSize='large' style={{stroke: "black", strokeWidth: "2"}}/>
                    <p className="next-button-text">NEXT</p>
                </div>
            </div>
           <img src={backgroundImage} alt="background" className="background-image"/>
        </div>
    )
}

export default AccordianPage;