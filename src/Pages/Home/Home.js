import homeImage from "../../Images/home.jpg"
import Logo from "../../Logo"
import GradientMenuBar from "../../GradientMenuBar"

const Home = () => {

    return(
        <>
            <div className="home-banner">
                <Logo logoGroup={"logo-group"} logoImg={"logo-img"} logoTxt={"logo-text"}/>
                <div className="home-text"> 
                    <p>lOREM iPSUM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.</p>
                    <p>Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.</p>
                    <p>Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.</p>
                </div>
            </div>
            <GradientMenuBar/>
            <img src={homeImage} alt="home background" className="home-image"/>
        </>
    )
}

export default Home;