import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import './App.css';
import MyNav from "./components/MyNav"
import MyFooter from './components/MyFooter';
import MySlider from './components/MySlider';

function App() {
  return (
    <div className="bg-dark">
      <MyNav />
      <MySlider title="Rambo" searchKey="rambo" />
      <MySlider title="Fantozzi" searchKey="fantozzi" />
      <MySlider title="Terminator" searchKey="terminator" />
      <MyFooter />
    </div>
  );
}

export default App;
