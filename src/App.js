import './App.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Card from './Card';
import Footer from './Footer';
import Copyright from './Copyright';

function App() {
  return (
    <div className="warp">
      < Header />
      < Section1 />
      < Section2 />
      <div className="card_warp">
        < Card/>
        < Card/>
        < Card/>
      </div>
      <div className="card_warp">
        < Card/>
        < Card/>
        < Card/>
      </div>
      < Footer/>
        <img className="footer_logo" src="/images/logo1.png" alt="로고"/>
      < Copyright/>
    </div>
  );
}

export default App;