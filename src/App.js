import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Pages
import About from './pages/About';
import Home from './pages/Home';

// Importing Components
import Navbar from './components/Navbar';

function App() {
    return ( 
        <Router>
            <Navbar></Navbar>
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={About} />
        </Router>
    );
}

export default App;