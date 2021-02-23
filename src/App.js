import Mwindow from './components/Mwindow'
import Docks from './components/Docks'
function App() {
  return (
    <div className="App">
      <nav>Nav</nav>
      <div className="Mwin1"><Mwindow /></div>
    <div className="Mwin2"><Mwindow /></div>
    
    <Docks/>
    </div>
  );
}

export default App;
