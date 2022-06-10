import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage"
import NewThread from "../NewThread/NewThread"
import ThreadHistory from "../ThreadHistory/ThreadHistory"
import Show from '../Show/Show';


function App() {

const [user, setUser] = useState(getUser());
const [refresh, setRefresh] = useState(false); 

  return (
   <main className="App">
     {
       user ? 
         <Routes>
         <Route path="/threads" element={<ThreadHistory user={user} setUser={setUser} />} />
         <Route path="/threads/new" element={<NewThread user={user} setUser={setUser} refresh={refresh} setRefresh={setRefresh} />} />
         <Route path="/threads/:id" element={<Show user={user} setUser={setUser} refresh={refresh} setRefresh={setRefresh}   />} />
         <Route path="/*" element={<Navigate to="/threads" />} />
       </Routes>
      : 
      <AuthPage setUser={setUser} />
    }

   </main>

  );
}

export default App;
