import './App.css';
import Counter from './components/counter';

function App() {
  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
  ];
  return (
    <div className="App">
      {/* <Skills skills={skills}/> */}
      <Counter/>
    </div>
  );
}

export default App;
