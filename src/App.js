import Generated from "./Pages/Generated";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Myfavorite from "./Pages/Myfavorite";
import Downbar from "./Components/Downbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Downbar />
        <Routes>
          <Route path='/' element={<Generated />} />
          <Route path='/favorites' element={<Myfavorite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
