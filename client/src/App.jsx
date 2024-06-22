import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [array, setarray] = useState([]);

  const fetchAPI = async() => {
    const response = await axios.get("http://localhost:8080/api/users")
    // console.log(response.data.users);
    setarray(response.data.users);
  };

  useEffect( ()=> {
    fetchAPI()
  },[])

  return (
<div>

  {array.map((user, index)=> (

    <div key={index}>
      <span>{user}</span>
      </div>
  ))}

</div>
  )
}

export default App
