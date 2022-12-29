import logo from './logo.svg';
import './App.css';
import AxiosGetComponent from './components/AxiosGetComponent';
import AxiosPostComponent from './components/AxiosPostComponent';
import AxiosPutComponent from './components/AxiosPutComponent';
import AxiosDeleteComponent from './components/AxiosDeleteComponent';
import AxiosErrorComponent from './components/AxiosErrorComponent';

function App() {
  return (
    <div className="App">
      <AxiosGetComponent/>
      <AxiosPostComponent/>
      <AxiosPutComponent/>
      <AxiosDeleteComponent/>
      <AxiosErrorComponent />
    </div>
  );
}

export default App;