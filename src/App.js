import './App.css';
import Profile from './Component/Profile';

function App() {
  const name = "Sana"
  const Bio = "Jumia"
  const Profession = "Kafteji yassin"
  const handleName=(a)=> alert(`I am ${a}`)
  

  return (
    <Profile name={name} Bio={Bio} Profession={Profession} handleName={handleName}>
      </Profile>
  );
}

export default App;
