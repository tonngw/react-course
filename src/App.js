import "antd/dist/reset.css";
import './App.css';
import Body from "./components/Body";
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div className='header-click'>
        <Header></Header>
      </div>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
