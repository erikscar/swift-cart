import { createBrowserRouter } from "react-router-dom"
import Index from "./pages"
import Search from "./pages/search"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/category",
    element: <Search />
  }
])

export default router