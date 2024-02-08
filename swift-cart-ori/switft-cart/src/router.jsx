import { createBrowserRouter } from "react-router-dom"
import Index from "./pages"
import Search from "./pages/Search"
import Cart from "./pages/Cart"
import ShowItem from "./pages/ShowItem"
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
  },
  {
    path: "/:id",
    element: <ShowItem />
  }
])

export default router