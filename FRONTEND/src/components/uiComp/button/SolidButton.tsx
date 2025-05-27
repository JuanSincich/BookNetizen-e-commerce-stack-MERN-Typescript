import { Box, Button } from "@mui/material";
import theme from "../../../theme/Theme";

interface SingleButtonProps {
  type: "submit";
  text: string;
  style?: "main" | "light";
  width?: string;
  align?: "flex-start" | "center" | "flex-end";
}

export default function SolidButton({
  type,
  text,
  style = "main",
  width,
  align,
}: SingleButtonProps) {
  const { backgroundColor, color } = {
    backgroundColor:
      style === "main"
        ? theme.palette.primary.main
        : theme.palette.primary.light,
    color: style === "light" ? theme.palette.primary.main : "white",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: align }}>
      <Button
        type={type}
        id="solidButton"
        variant="outlined"
        sx={{
          alignSelf: align,
          width: width || "auto",
          /*  marginRight: "1rem", */
          my: "1rem",
          textAlign: "center",
          backgroundColor: backgroundColor,
          color: color,

          border: `3px solid ${theme.palette.primary.main}`,
          borderRadius: 3,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "500",
          lineHeight: "normal",
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
