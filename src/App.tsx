import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import { useSelector } from "react-redux";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  const isDark = useSelector((state: any) => state.isDark)
  // const isDark = true;
  return (
    <BrowserRouter>
    <GlobalStyles isDark={isDark}/>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>h</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
