import React, { useEffect, useState } from "react";

export default function Skills({ skills }) {
  const [isLoggedin, setIsloggedIn] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsloggedIn(true);
    },4000)
  },[])
  return (
    <div>
      <h2>List of Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      {isLoggedin?(<button>start</button>): (<button>login</button>)}
    </div>
  );
}
