import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import './App.css';
import MyNav from "./components/MyNav"
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="bg-dark">
      <MyNav />
      <MyFooter />
    </div>
  );
}

export default App;
