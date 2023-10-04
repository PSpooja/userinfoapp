
import { useEffect, useState } from 'react';
import './App.css';
import UsersData from './UsersData';
import axios from 'axios';
// const Api = "https://randomuser.me/api"

function App() {

  const [user, setUser] = useState([])
  
  const fetchData = async() => {
     try{
       const res = await axios.get("https://randomuser.me/api")
       console.log(res.data.results)
       const result = res.data.results;
       if(result.length > 0){
        setUser(result)
        return result
       }
     }catch(e){
      console.log(e)
     }
     return null
  }

  useEffect(()=>{
    async function fetchAndStoreLocal(){
      try{
        const userData = await fetchData()
        if (userData) {
          localStorage.setItem("user", JSON.stringify(userData));
          console.log("User data saved to local storage:", userData);
        }
      }catch(err){  
        console.error(err);
      }
    
    }

    fetchAndStoreLocal();
    // fetchData(Api)

  }, [])
   
  return (
    <div className="App">
       <h1>Users</h1>
       <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          </tr>
          
        </thead>
        <tbody>
          <UsersData user={user}/>
        </tbody>
       </table>
      <button onClick={fetchData}>Refresh</button>
    </div>
  );
}

export default App;
