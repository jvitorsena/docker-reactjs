import logo from './logo.svg';
import './App.css';
import TaskTable from './components/TasksTable';

function App() {
  return (
    <div className="App">
      <TaskTable />
      {/* <TaskTable /> */}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload with success.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
