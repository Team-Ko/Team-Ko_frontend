import './App.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Card from './Card';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;