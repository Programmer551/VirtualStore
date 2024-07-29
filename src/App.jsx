import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SentRequests from "./Pages/SentRequests";
import ReceivedRequests from "./Pages/ReceivedRequests";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import AddProduct from "./Pages/AddProduct";
// const router = createBrowserRouter([
//   { path: "/login", element: <Login /> },
//   { path: "addproduct", element: <AddProduct /> },
// ]);
export const App = () => {
  return (
    <div>
      <h1 className='text-3xl'>This is an E Commerce App</h1>
      <Login />
      <Home />
      <AddProduct />
      <Profile />
      <Product />
      <SentRequests />
      <ReceivedRequests />
    </div>
  );
  // <RouterProvider router={router} />;
};
export default App;
