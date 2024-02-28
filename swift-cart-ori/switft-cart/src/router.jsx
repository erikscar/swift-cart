import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import Search from "./pages/search.jsx";
import Cart from "./pages/Cart";
import ShowItem from "./pages/ShowItem";
import WishList from "./pages/WishList";
import Layout from "./pages/Layout";
import Plans from "./pages/Plans";
import Release from "./pages/Release";
import Popular from "./pages/Popular";
import Admin from "./pages/Admin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "/cart", element: <Cart /> },
      { path: "/:id", element: <ShowItem /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/plans", element: <Plans /> },
      { path: "/releases", element: <Release /> },
      { path: "/popular", element: <Popular /> },
      { element: <Search /> },
    ],
  },
  { path: "/admin", element: <Admin /> }
]);

export default router;
