import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../public/cartShoppingLogoExport.jpg";

import theme from "../../../theme/Theme";
import { useNavigate } from "react-router-dom";

interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode | null;
  action?: () => void;
}

interface NavBarProps {
  navArrayLinks: NavLink[];
}

export default function NavBar({ navArrayLinks }: NavBarProps) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Container disableGutters>
        <AppBar
          position="static"
          sx={{
            backgroundColor: theme.palette.background.default,
            boxShadow: "none",
            py: { xs: "0.5rem", md: "1.5rem" },
          }}
        >
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", px: 0, py: 0 }}
          >
            {/* iconBurger */}
            <Box>
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "flex", sm: "none" }, color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* logo */}
            <Box
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  sm: "flex-start",
                },
                flexGrow: 1,
                gap: "0.5rem",
              }}
            >
              <Box>
                <img src={Logo} alt="" style={{ maxWidth: "60px" }} />
              </Box>

              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "2rem" } }}
              >
                Book Netizen
              </Typography>
            </Box>

            {/* botones */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navArrayLinks.map((item) => (
                <Button
                  key={item.title}
                  onClick={() => {
                    if (item.action) {
                      item.action(); // Ejecuta acción (abrir modal)
                    } else {
                      navigate(item.path); // Si no hay acción, redirige
                    }
                  }}
                  sx={{
                    color: item.icon ? theme.palette.primary.main : "black",
                    px: item.icon ? 0 : { md: 3 },
                    fontSize: "1rem",
                  }}
                >
                  {item.icon ? item.icon : item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} />
      </Drawer>
    </>
  );
}
