import logo from './logo.svg';
import './App.css';
import NavPanel from "./components/header";
import HighlightedWorks from "./components/highlightedworks";

function App() {
  return (
    <div>
      <div>
        <NavPanel />
      </div>
      <div className="pageContent">
        <HighlightedWorks />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          fontSize: '1.3rem',
          gap: '2.5rem',
          margin: '3rem'
        }}>
          <a
            href="https://www.linkedin.com/in/jocelyn-sun-98435922a"
            target='_blank'
            rel="noopener noreferrer"
            className='a'
          >
            linkedin
          </a>
          <a
          href='mailto:sunjocelynw@gmail.com'
          className='a'
          >
          contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
