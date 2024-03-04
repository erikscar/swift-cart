import router from "./_config/router";
import { RouterProvider } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        theme="colored"
        position="bottom-left"
        closeOnClick={true}
        transition={Slide}
        className="toast"
      />
    </>
  );
}
