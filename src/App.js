import logo from './logo.svg';
import './App.css';
import Navbar from './Components.jsx/Navbar.jsx/Navbar';
import Banner from './Components.jsx/Banner/Banner';
import Rowpost from './Components.jsx/Rowpost/Rowpost';
import {action, originals, upcoming,topRated
} from './Urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Orginals'/>
      <Rowpost url={action}  title='Action Movies' isSmall/>
      <Rowpost url={upcoming}  title='Upcoming' isSmall/>
      <Rowpost url={topRated}  title='Top Rated' isSmall/>
    </div>
  );
}

export default App;
