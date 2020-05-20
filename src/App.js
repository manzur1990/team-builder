import React, {useState} from 'react'; //Import the `useState` hook and set up a state property for your team members list
import Form from './Form';
import MemberList from "./MemberList"

import './App.css';

function App() {

  const [avenger, setAvenger] = useState([  
    {
      name: "Tony Stark",
      heroName: "Iron Man",
      superPower: "Repulsors"
    }]);
    
    const addNewAvenger = data => {
      const newAvenger = {
        name: data.name,
        heroName: data.heroName,
        superPower: data.superPower
      };

    setAvenger([...avenger, newAvenger]);
  };

  return (
    <div>
      <h1>Avanger Team Builder</h1>
      <Form addNewAvenger={addNewAvenger}/>
      <MemberList avenger={avenger}/>

    </div>
  );
}

export default App;




















