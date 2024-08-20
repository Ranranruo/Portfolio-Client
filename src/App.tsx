import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from "react-redux";
import GlobalStyles from "./style/GlobalStyles";
import store from "./store/store";
import Text from "./components/atoms/Text/Text";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<h1>main</h1>} />
            <Route path="/1" element={<Text color="primary01">a</Text>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
