import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from "react-redux";
import GlobalStyles from "./style/GlobalStyles";
import store from "./store/store";
import Text from "./components/ui/atoms/Text/Text";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<h1>a</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
