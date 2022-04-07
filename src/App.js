import './App.css';

function App() {
  return (
    <div className="App">
      <Info/>
      <Info/>
    </div>
  );
}

function Info() {
  return (
    <div>
      <h1>Inventory Management System</h1>
      <p>Manage Your stuff!</p>
      <AddItem/>
    </div>
  );
}

function AddItem () {
  return (
    <form>
      <label for="text-form">Type something </label>
      <input type="text" id="text-form"/>
    </form>
  )
}

export default App;
