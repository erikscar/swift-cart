import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/index.jsx";
import Home from "../pages/Home/index.jsx";
import Cart from "../pages/Cart/index.jsx";
import ShowItem from "../pages/ShowItem/index.jsx";
import WishList from "../pages/WishList/index.jsx";
import Plans from "../pages/Plans/index.jsx";
import Release from "../pages/Release/index.jsx";
import Popular from "../pages/Popular/index.jsx";
import Search from "../pages/SearchPage/search.jsx";
import Admin from "../pages/Admin/index.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
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
