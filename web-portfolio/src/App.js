import logo from './logo.svg';
import './App.css';
import NavPanel from "./components/header";
import HighlightedWorks from "./components/highlightedworks";

function App() {
  return (
    <div>
      <NavPanel />
      <hr style={{width: "100%", height: "0.24rem", backgroundColor:"#FFD478", margin: "0", border: "none"}}></hr>
      <hr style={{width: "100%", height: "0.09rem", backgroundColor:"#000000", margin: "0", border: "none"}}></hr>
      <body>
        <HighlightedWorks />
      </body>
    </div>
  );
}

export default App;
