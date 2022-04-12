import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import List from "./Components/Admin/List/List";
import Add from "./Components/Admin/Add/Add";
import Edit from "./Components/Admin/Edit/Edit";
import Cart from "./Pages/Cart";
import Location from "./Pages/Location";
import PaymentForm from "./Pages/Payment";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RequireAuth from "./Components/Auth/RequireAuth";
import ProdDetail from "./Pages/ProdDetail";
import Feedbacks from "./Pages/Feedbacks";
import Error from "./Pages/Error.jsx";
import Favorite from "./Pages/Favorite";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/local" element={<Location />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
