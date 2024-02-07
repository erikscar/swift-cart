import { createBrowserRouter } from "react-router-dom"
import Index from "./pages"
import Search from "./pages/Search"
import Cart from "./pages/Cart"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/category",
    element: <Search />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

export default router