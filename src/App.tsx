import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import { Provider } from "react-redux";
import GlobalStyles from "./style/GlobalStyles";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<h1>h</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
