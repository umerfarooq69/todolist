import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <header>
          <h1 className=''>TODO LIST</h1>
        </header>
        <block>
          <input className='form-control' placeholder="Add Item..."/>
          <button className='btn'>Add</button>
        </block>
      </div>
    </div>
  );
}

export default App;
