import "./App.css";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import Index from "./components/Index"
import Finish from "./components/Finish";
import Test from "./components/Test";


function App() {

  return (
    <Router>
      <div className="App">
      {/* <Navigate to="/index"/> */}
        <Routes>
        
          <Route exact path="/index" element={<Index/>}/>
          
          <Route path="/test/:id/:num" element={<Test/>}/>
           
         
          <Route path="/finish" element={<Finish/>}/>
           
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
