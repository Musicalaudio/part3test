import {Routes, BrowserRouter, Route} from "react-router-dom"
import AccordianPage from "./Pages/Accordian/AccordianPage";
import Home from "./Pages/Home/Home";
import HomeTopics from "./Pages/Home topics/HomeTopics"
import Globe from "./Pages/Globe/Globe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Globe/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/home-topics" element={<HomeTopics/>}/>
          <Route exact path="/accordian" element={<AccordianPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
