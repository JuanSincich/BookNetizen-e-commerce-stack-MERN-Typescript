import { Box, Button } from "@mui/material";
import theme from "../../../theme/Theme";

interface SingleButtonProps {
  text: string;
  variantColor?: "primary" | "secondary";
}

export default function SingleButton({
  text,
  variantColor,
}: SingleButtonProps) {
  const buttonColor =
    variantColor === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;
  return (
    <Box>
      <Button
        variant="outlined"
        sx={{
          border: 3,
          borderRadius: 3,
          color: buttonColor,
          textTransform: "none",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
