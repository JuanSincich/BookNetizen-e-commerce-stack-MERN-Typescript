// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/uiComp/navBar/NavBar";
import Footer from "../components/uiComp/footer/Footer";
import { Box, Modal } from "@mui/material";
import Login from "../components/pages/Login";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode | null;
  action?: () => void;
}

export default function Layout() {
  const [loginOpen, setLoginOpen] = useState(false);

  const navArrayLinks: NavLink[] = [
    { title: "Inicio", path: "/" },
    { title: "Categorías", path: "/categories" },
    {
      title: "Login",
      path: "/login",
      icon: <PersonIcon />,
      action: () => setLoginOpen(true),
    },
    { title: "Favoritos", path: "/favourites", icon: <StarIcon /> },
    { title: "Carrito", path: "/carrito", icon: <ShoppingCartIcon /> },
  ];

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar navArrayLinks={navArrayLinks} />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />

      <Modal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 4,
            zIndex: 1400,
            width: { xs: "90%", sm: "auto" },
          }}
        >
          <Login />
        </Box>
      </Modal>
    </Box>
  );
}
