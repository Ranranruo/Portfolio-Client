import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import root from "./routers/root"
import store from "./store/store"
import InitStyle from "./styles/init/InitStyle"

function App() {
  return (
    <Provider store={store}>
      <InitStyle/>
      <RouterProvider router={root} />
    </Provider>
  )
}

export default App
