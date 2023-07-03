import "./App.css";
import Counter from "./components/counter";
import Users from "./components/users";

function App() {
  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
  ];
  return (
    <div className="App">
      {/* <Skills skills={skills}/> */}
      <Counter />
      <Users />
    </div>
  );
}

export default App;
