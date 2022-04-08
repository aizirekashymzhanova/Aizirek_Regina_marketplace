import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
// import Products from "./pages/Products";
import List from "./Components/Admin/List/List";
import Add from "./Components/Admin/Add/Add";
import Edit from "./Components/Admin/Edit/Edit";
import Cart from "./Pages/Cart";
import Location from "./Pages/Location";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import RequireAuth from "./Components/Auth/RequireAuth";
// import NoMatch from "./pages/NoMatch";
// import ProdDetail from "./pages/ProdDetail";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/local" element={<Location />} />
        {/* <Route path="/admin" element={<Admin />}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route> */}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
