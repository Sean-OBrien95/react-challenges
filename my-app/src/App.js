import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className="App">
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
    </div>
  );
}

export default App;