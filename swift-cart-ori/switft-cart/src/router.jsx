import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import Search from "./pages/search.jsx";
import Cart from "./pages/Cart";
import ShowItem from "./pages/ShowItem";
import WishList from "./pages/WishList";
import Layout from "./pages/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "/cart", element: <Cart /> },
      { path: "/:id", element: <ShowItem /> },
      { path: "/wishlist", element: <WishList /> },
      { element: <Search /> },
    ],
  },
]);

export default router;
