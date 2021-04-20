import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import DashBoard from './components/dashBoard/dashBoard';

function App() {
  return (
    <div className="App">
     <DashBoard />
    </div>
  );
}

export default App;
