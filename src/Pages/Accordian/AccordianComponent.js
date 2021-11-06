import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordianComponent = ({panelName, expanded, handleChange}) => {
   
    console.log(panelName)
    return(
       <div className="accordian-box">
           <Accordion square disableGutters elevation={0} expanded={expanded === panelName} onChange={handleChange(panelName)}> 
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: 'black'}} fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-label"
                sx={{bgcolor: '#55C6D7'}}
            >
                <p>Lorem Ipsum</p>
            </AccordionSummary>
            <AccordionDetails className="accordian-content">
                <p>
                    Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. 
                    Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. 
                </p>
            </AccordionDetails>
            </Accordion>
       </div>

    )
}

export default AccordianComponent