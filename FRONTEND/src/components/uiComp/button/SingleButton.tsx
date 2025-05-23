import { Box, Button } from "@mui/material";
import theme from "../../../theme/Theme";

interface SingleButtonProps {
  text: string;
}

export default function SingleButton({ text }: SingleButtonProps) {
  return (
    <Box>
      <Button
        variant="outlined"
        sx={{
          border: 3,
          borderRadius: 3,
          color: theme.palette.primary.main,
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
