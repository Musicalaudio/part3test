import ellipse from "./Images/Ellipse1.png"

const logo = ({logoGroup, logoImg, logoTxt}) =>{
    return(
        <div className={logoGroup}>
            <img src={ellipse} alt="eclipse logo" className={logoImg}/>
            <p className={logoTxt}>LOGO</p>
        </div>
    )
}

export default logo