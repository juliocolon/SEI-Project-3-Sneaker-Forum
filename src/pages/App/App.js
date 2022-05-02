import {useState} from "react"; 
import AuthPage from "../AuthPage/AuthPage"
import NewThread from "../NewThread/NewThread"
import ThreadHistory from "../ThreadHistory/ThreadHistory"

function App() {

const [user, setUser] = useState(null);



  return (
   <main className="App">
     {
       user ? 
      <NewThread />
      : 
      <AuthPage />
    }

   </main>

  );
}

export default App;
