import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';

function App() {

  return (
    <div className="App">
    <Navbar/>

    <Router>
     <Route path='/'exact component={HomeScreen} />
     <Route path='/cart'exact component={CartScreen} />
    </Router>
    </div>
  );
}

export default App;
