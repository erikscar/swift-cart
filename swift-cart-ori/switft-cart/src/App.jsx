import { RouterProvider } from "react-router-dom";
import router from "./_config/router";
import { Slide, ToastContainer } from "react-toastify";

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
