import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";
interface User {
  id: string;
  pw: string;
}
const App:React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(()=>{
    fetch("http://localhost:8080/test").then(data=>data.json()).then(data=>{setUser(data)});
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>{(user) ? user.id : ""}</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;