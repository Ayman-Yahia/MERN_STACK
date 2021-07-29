import './App.css';
import { Router } from '@reach/router';
import Detail from './views/Detail'
import Main from './views/Main'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Detail path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
