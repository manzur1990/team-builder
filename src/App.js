import React, {useState} from 'react';
import Form from './Form';
import MemberList from "./MemberList"

import './App.css';

function App() {

  const [avenger, setAvenger] = useState([
    {
      name: "Tony Stark",
      heroName: "Iron Man",
      superPower: "Technology"
    }]);
    
    const addNewAvenger = data => {
      console.log("addNewAvenger:", data)
      const newAvenger = {
        name: data.name,
        heroName: data.heroName,
        superPower: data.superPower
      };

    setAvenger([...avenger, newAvenger]);
  };

  console.log("from app:",avenger)
  return (
    <div>

      <Form addNewAvenger={addNewAvenger}/>
      <MemberList avenger={avenger}/>

    </div>
  );
}

export default App;




















