import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from "./Components/Home/Homepage";
import Divisions from "./Components/Divisions/Divisions";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Homepage />
        <Divisions />
      </Router>
    </div>
  );
}

export default App;
