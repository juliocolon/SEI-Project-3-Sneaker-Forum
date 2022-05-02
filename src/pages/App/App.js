import {useState} from "react"; 
import AuthPage from "../AuthPage/AuthPage"
import NewThread from "../NewThread/NewThread"
import ThreadHistory from "../ThreadHistory/ThreadHistory"
import NavBar from "../../components/Nav/NavBar";
import {Routes, Route} from "react-router-dom"


function App() {

const [user, setUser] = useState(null);



  return (
   <main className="App">
     {
       user ? 
       <Routes>
         <Route path="/threads/new" element={<NewThread />} />
         <Route path="/threads" element={<ThreadHistory />} />
       </Routes>
      : 
      <NavBar />
    }

   </main>

  );
}

export default App;
