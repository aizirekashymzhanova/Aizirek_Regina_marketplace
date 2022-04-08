import React from "react";
import { Container, Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Container maxWidth="lg">
        <h1>Admin page</h1>

        {pathname !== "/admin/add" ? (
          <Link to="add">
            <IconButton sx={{ bgcolor: "text.secondary" }}>
              <AddIcon />
            </IconButton>
          </Link>
        ) : null}
        <Outlet />
      </Container>
    </div>
  );
};

export default Admin;
