import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ShowItem from "./pages/ShowItem";
import WishList from "./pages/WishList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/category",
    element: <Search />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/:id",
    element: <ShowItem />,
  },
  { path: "/wishlist", element: <WishList /> },
]);

export default router;
