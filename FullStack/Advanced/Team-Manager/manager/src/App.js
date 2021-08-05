import './App.css';
import {Router} from '@reach/router';
import Main from '../src/views/Main';
import Add from '../src/views/Add';
function App() {
  return (
    <div className="App">
        <Router>
          <Main path='/players/list'/>
          <Add path="/players/addplayer"/>
      </Router>
    </div>
  );
}

export default App;
