import {NavBar, NewCarsCollection} from './ui-components';
import './App.css';

function App() {

  const navbarOverrides = {
    "Flex.Flex[0].Image[0]": {
      src: "https://img.icons8.com/color/50/000000/car--v1.png",
    },
    
    
  };

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width='100%' />
      <header className="App-header">
        <NewCarsCollection />
      </header>
    </div>
  );
}

export default App;
