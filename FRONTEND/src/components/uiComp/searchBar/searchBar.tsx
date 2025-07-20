import {
  Box,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [screenVariant, setScreenVariant] = useState<"h5" | "h6">(
    smScreen ? "h6" : "h5"
  );

  useEffect(() => {
    if (smScreen) {
      setScreenVariant("h6");
    } else {
      setScreenVariant("h5");
    }
  }, [smScreen]);

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        py: "2rem",
      }}
    >
      <Typography variant={screenVariant}>
        ¿Que estás buscando para leer?
      </Typography>

      <Box component={"form"}>
        <TextField
          /* label="Size" */
          id="shearchDate"
          size="small"
          sx={{
            width: { sm: "400px", md: "600px" },
          }}
        />
      </Box>
    </Box>
  );
}

/*










import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí realizarías la lógica para buscar libros
    console.log("Buscar libros con:", searchQuery);
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        Busca tu libro
      </Typography>
      <form
        onSubmit={handleSearchSubmit}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <TextField
          label="Buscar por título o autor"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ marginBottom: "1rem" }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Buscar
        </Button>
      </form>
    </Box>
  );
}
 */
